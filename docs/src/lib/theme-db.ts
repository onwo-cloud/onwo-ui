const DB_NAME = 'theme-builder-db';
const DB_VERSION = 1;
const STORE_NAME = 'themes';

let dbInstance: IDBDatabase | null = null;

type SerializedTheme = string;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (dbInstance) {
      resolve(dbInstance);
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    // eslint-disable-next-line unicorn/prefer-add-event-listener
    request.onerror = () => reject(new Error('Error opening database'));
    request.onsuccess = () => {
      dbInstance = request.result;
      resolve(request.result);
    };

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'name' });
      }
    };
  });
}

/**
 * Saves a serialized theme to the database.
 * The theme manager is responsible for serializing the theme before calling this function.
 */
export async function saveTheme(theme: SerializedTheme): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    // Use a deep clone to avoid any IndexedDB data cloning errors
    const request = store.put(structuredClone(theme));

    request.onsuccess = () => resolve();
    // eslint-disable-next-line unicorn/prefer-add-event-listener
    request.onerror = () => reject(request.error);
  });
}

/**
 * Retrieves all themes from the database in their serialized format.
 */
export async function getAllThemes(): Promise<SerializedTheme[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => resolve(request.result);
    // eslint-disable-next-line unicorn/prefer-add-event-listener
    request.onerror = () => reject(request.error);
  });
}

/**
 * Retrieves a single theme by its name in serialized format.
 */
export async function getTheme(name: string): Promise<SerializedTheme | undefined> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(name);

    request.onsuccess = () => resolve(request.result);
    // eslint-disable-next-line unicorn/prefer-add-event-listener
    request.onerror = () => reject(request.error);
  });
}

/**
 * Deletes a theme from the database by its name.
 */
export async function deleteTheme(name: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(name);

    request.onsuccess = () => resolve();
    // eslint-disable-next-line unicorn/prefer-add-event-listener
    request.onerror = () => reject(request.error);
  });
}
