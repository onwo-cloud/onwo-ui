import { $, type QRL } from '@qwik.dev/core';
import { z } from '@qwik.dev/router';
import { isServer } from '@qwik.dev/core/build';

export class PlatformError extends Error {
  constructor(public details: { message: string }) {
    super(details.message);
    this.name = 'PlatformError';
  }
}

export class IndexedDBError extends Error {
  constructor(public details: { message: string; cause?: unknown }) {
    super(details.message);
    this.name = 'IndexedDBError';
    this.cause = details.cause;
  }
}

export class ValidationError extends Error {
  constructor(public details: { message: string; errors: string }) {
    super(details.message);
    this.name = 'ValidationError';
  }
}

interface StoreConfig {
  dbName: string;
  storeName: string;
  version?: number;
  keyPath?: string;
}

interface PersistentStore<T> {
  saveItem$: QRL<(item: T) => Promise<T | undefined>>;
  getAllItems$: QRL<() => Promise<T[]>>;
  getItem$: QRL<(key: string | number) => Promise<T | undefined>>;
  deleteItem$: QRL<(key: string | number) => Promise<undefined>>;
}

const wrapRequest = <T>(request: IDBRequest, errorMsg: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    request.onerror = () =>
      reject(new IndexedDBError({ message: errorMsg, cause: request.error }));
    request.onsuccess = () => resolve(request.result as T);
  });
};

const openDB = (config: StoreConfig): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (isServer) {
      return reject(new PlatformError({ message: 'Server-side IDB access' }));
    }
    const request = indexedDB.open(config.dbName, config.version || 1);
    request.onupgradeneeded = (e) => {
      const db = (e.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(config.storeName))
        db.createObjectStore(config.storeName, { keyPath: config.keyPath || 'id' });
    };
    request.onerror = () =>
      reject(new IndexedDBError({ message: 'DB Open Failed', cause: request.error }));
    request.onsuccess = () => resolve(request.result);
  });
};

const runTransaction = async <R>(
  config: StoreConfig,
  mode: IDBTransactionMode,
  operation: (store: IDBObjectStore) => IDBRequest,
): Promise<R> => {
  const db = await openDB(config);
  const tx = db.transaction([config.storeName], mode);
  const store = tx.objectStore(config.storeName);

  const reqPromise = wrapRequest<R>(operation(store), `${mode} transaction failed`);

  tx.oncomplete = () => db.close();
  tx.onerror = () => db.close();

  return reqPromise;
};

const validateAndRecover = async <TIn, TOut>(
  config: StoreConfig,
  operationPromise: Promise<TIn>,
  validator: (data: TIn) => Promise<z.SafeParseReturnType<any, any>>,
  fallback: TOut,
): Promise<TOut> => {
  try {
    const data = await operationPromise;

    // Allow null/undefined to pass through as-is (converted to TOut)
    // or rely on fallback if downstream logic strictly needs TOut.
    if (data === undefined || data === null) return data as unknown as TOut;

    const result = await validator(data);
    if (!result.success) {
      // Flatten errors from ValidatorErrorType
      const errorMsg = Object.entries(result.error.issues || {})
        .map(([f, e]) => `${f}: ${JSON.stringify(e)}`)
        .join(', ');

      throw new ValidationError({
        message: 'Schema mismatch',
        errors: errorMsg,
      });
    }

    return result.data as TOut;
  } catch (err: any) {
    if (err instanceof ValidationError || err?.name === 'ValidationError') {
      const errorDetails = err.details?.errors || err.message;
      console.warn(`Malformed data in ${config.storeName}: ${errorDetails}. Clearing...`);
      try {
        await runTransaction<void>(config, 'readwrite', (s) => s.clear());
      } catch (e) {
        // Ignore failure to clear
      }
    }
    // Return fallback for ValidationError or any other errors
    return fallback;
  }
};

/**
 * @param schema - Must be passed as a QRL (e.g. $(myZodSchema))
 */
export const createPersistentStore = <S extends z.ZodTypeAny>(
  schema: QRL<() => S>,
  config: StoreConfig,
) => {
  type T = z.infer<S>;

  // Validator for single items
  const validateItem = $(async (d: unknown): Promise<z.SafeParseReturnType<any, any>> => {
    const s = await schema();
    const res = s.safeParse(d);
    if (!res.success) console.error('Item validation error', res.error);
    return res;
  });

  // Validator for Arrays (Fix for getAllItems)
  const validateArray = $(async (d: unknown): Promise<z.SafeParseReturnType<any, any>> => {
    const s = await schema();
    // Wrap the schema in an array validator
    const arraySchema = z.array(s);
    const res = arraySchema.safeParse(d);
    if (!res.success) console.error('Array validation error', res.error);
    return res;
  });

  return (): PersistentStore<T> => {
    return {
      saveItem$: $((item: T) =>
        validateAndRecover(
          config,
          // put returns the key, we map back to the item for validation
          runTransaction<any>(config, 'readwrite', (s) => s.put(item)).then(() => item),
          validateItem,
          undefined as T | undefined,
        )
      ) as QRL<(item: T) => Promise<T | undefined>>,

      getAllItems$: $(() =>
        validateAndRecover(
          config,
          runTransaction<unknown[]>(config, 'readonly', (s) => s.getAll()),
          validateArray, // <--- Using the array validator here
          [] as T[],
        )
      ) as QRL<() => Promise<T[]>>,

      getItem$: $((key: string | number) =>
        validateAndRecover(
          config,
          runTransaction<unknown>(config, 'readonly', (s) => s.get(key)),
          validateItem,
          undefined as T | undefined,
        )
      ) as QRL<(key: string | number) => Promise<T | undefined>>,

      deleteItem$: $((key: string | number) =>
        runTransaction<void>(config, 'readwrite', (s) => s.delete(key))
          .then(() => undefined)
          .catch(() => undefined)
      ) as QRL<(key: string | number) => Promise<undefined>>,
    };
  };
};
