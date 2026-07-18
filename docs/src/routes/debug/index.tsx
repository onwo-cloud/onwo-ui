import { component$, $, useSignal, useVisibleTask$, useOnDocument } from '@qwik.dev/core';
import {
  KeybindRegistryProvider,
  KeybindRegistryControl,
  defineKeybindModule,
  useKeybindRegistry,
  useKeybindCapture,
  useKeybindRegistryControls
} from '~primitives/@kit/keybind-registry';

const vimModule = defineKeybindModule({
  name: 'vim',
  mappings: {
    'l': 'navigate:right',
    'h': 'navigate:left',
    'j': 'navigate:down',
    'k': 'navigate:up',
  },
});

// ==========================================
// 1. Header Toolbar Component
// ==========================================
export const HeaderToolbar = component$(() => {
  const selectedHeaderId = useSignal('1:1');
  const searchInputRef = useSignal<HTMLInputElement>();
  const query = useSignal('');
  const headerItems = ['1:1', '1:2', '1:3', '1:4'];

  const focusItem = $((id: string) => {
    selectedHeaderId.value = id;
    setTimeout(() => {
      const el = document.querySelector<HTMLElement>(`[data-item-id="${id}"]`);
      el?.focus();
    }, 0);
  });

  useVisibleTask$(() => {
    focusItem('1:1');
  });

  // Revert focus to active topbar item when clicking on blank document/background
  useOnDocument(
    'pointerdown',
    $((event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const headerEl = document.querySelector<HTMLElement>('[data-control-id="header"]');
      const gridEl = document.querySelector<HTMLElement>('[data-control-id="grid-body"]');

      // Ignore pointerdowns inside header toolbar or grid body to prevent focus stagger
      if (headerEl && headerEl.contains(target)) return;
      if (gridEl && gridEl.contains(target)) return;

      focusItem(selectedHeaderId.value);
    })
  );

  // Topbar keybinds registered on Provider Context
  useKeybindRegistry({ action: 'navigate:right' }, $(() => {
    const idx = headerItems.indexOf(selectedHeaderId.value);
    const nextIdx = (idx + 1) % headerItems.length;
    focusItem(headerItems[nextIdx]);
  }));

  useKeybindRegistry({ action: 'navigate:left' }, $(() => {
    const idx = headerItems.indexOf(selectedHeaderId.value);
    const prevIdx = (idx - 1 + headerItems.length) % headerItems.length;
    focusItem(headerItems[prevIdx]);
  }));

  useKeybindRegistry({ action: 'navigate:down' }, $(() => {
    const gridEl = document.querySelector<HTMLElement>('[data-control-id="grid-body"]');
    if (gridEl) {
      const activeGridCard = gridEl.querySelector<HTMLElement>('[data-item-id]');
      activeGridCard?.focus();
    }
  }));

  // Global search input capture
  useKeybindCapture(
    $((capturedText) => {
      query.value += capturedText;
      setTimeout(() => {
        if (searchInputRef.value) {
          searchInputRef.value.focus();
          const len = searchInputRef.value.value.length;
          searchInputRef.value.setSelectionRange(len, len);
        }
      }, 0);
    }),
  );

  return (
    <div
      data-control-id="header"
      style={{
        border: '1px solid #475569',
        borderRadius: '8px',
        padding: '12px',
        marginBottom: '16px',
        outline: 'none'
      }}
    >
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <input
          ref={searchInputRef}
          bind:value={query}
          placeholder="search..."
          style={{
            padding: '6px 12px',
            borderRadius: '6px',
            border: '1px solid #475569',
            background: '#0f172a',
            color: '#fff',
            outline: 'none',
            width: '120px'
          }}
        />
        {headerItems.map((id) => (
          <button
            key={id}
            data-item-id={id}
            tabIndex={0}
            onFocus$={() => selectedHeaderId.value = id}
            onClick$={() => focusItem(id)}
            style={{
              padding: '6px 16px',
              borderRadius: '6px',
              border: selectedHeaderId.value === id ? '2px solid #3b82f6' : '1px solid #475569',
              background: selectedHeaderId.value === id ? '#2563eb' : '#334155',
              color: '#fff',
              cursor: 'pointer',
              fontWeight: 'bold',
              outline: 'none'
            }}
          >
            {id}
          </button>
        ))}
      </div>
    </div>
  );
});

// ==========================================
// 2. Grid Body Component
// ==========================================
export const GridBody = component$(() => {
  const controls = useKeybindRegistryControls();
  const selectedGridId = useSignal('2:1');
  const line2 = ['2:1', '2:2', '2:3'];
  const line3 = ['3:1', '3:2'];
  const gridItems = [...line2, ...line3];

  const focusItem = $((id: string) => {
    selectedGridId.value = id;
    setTimeout(() => {
      const el = document.querySelector<HTMLElement>(`[data-item-id="${id}"]`);
      el?.focus();
    }, 0);
  });

  useKeybindRegistry({ controls, action: 'navigate:right' }, $(() => {
    const idx = gridItems.indexOf(selectedGridId.value);
    const nextIdx = (idx + 1) % gridItems.length;
    focusItem(gridItems[nextIdx]);
  }));

  useKeybindRegistry({ controls, action: 'navigate:left' }, $(() => {
    const idx = gridItems.indexOf(selectedGridId.value);
    const prevIdx = (idx - 1 + gridItems.length) % gridItems.length;
    focusItem(gridItems[prevIdx]);
  }));

  useKeybindRegistry({ controls, action: 'navigate:up' }, $(() => {
    if (line2.includes(selectedGridId.value)) {
      const headerEl = document.querySelector<HTMLElement>('[data-control-id="header"]');
      if (headerEl) {
        const activeHeaderBtn = headerEl.querySelector<HTMLElement>('[data-item-id]');
        activeHeaderBtn?.focus();
      }
    } else {
      const idx = gridItems.indexOf(selectedGridId.value);
      focusItem(gridItems[idx - 3]);
    }
  }));

  useKeybindRegistry({ controls, action: 'navigate:down' }, $(() => {
    if (line2.includes(selectedGridId.value)) {
      const idx = gridItems.indexOf(selectedGridId.value);
      const nextIdx = Math.min(idx + 3, gridItems.length - 1);
      focusItem(gridItems[nextIdx]);
    }
  }));

  return (
    <KeybindRegistryControl
      controls={controls}
      data-control-id="grid-body"
      tabIndex={0}
      onPointerDown$={$((event) => {
        const target = event.target as HTMLElement;
        const itemId = target.getAttribute('data-item-id');
        if (itemId) {
          focusItem(itemId);
        } else {
          focusItem(selectedGridId.value);
        }
      })}
      style={{
        border: '1px solid #334155',
        borderRadius: '8px',
        padding: '16px',
        outline: 'none',
        cursor: 'pointer'
      }}
    >
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '16px' }}>
          {line2.map((id) => (
            <div
              key={id}
              data-item-id={id}
              tabIndex={0}
              onFocus$={() => selectedGridId.value = id}
              onPointerDown$={(e) => {
                e.stopPropagation();
                focusItem(id);
              }}
              style={{
                height: '100px',
                borderRadius: '8px',
                padding: '12px',
                border: selectedGridId.value === id ? '2px solid #3b82f6' : '1px solid #475569',
                background: selectedGridId.value === id ? '#1e3a8a' : '#0f172a',
                display: 'flex',
                alignItems: 'flex-end',
                fontWeight: 'bold',
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              {id}
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {line3.map((id) => (
            <div
              key={id}
              data-item-id={id}
              tabIndex={0}
              onFocus$={() => selectedGridId.value = id}
              onPointerDown$={(e) => {
                e.stopPropagation();
                focusItem(id);
              }}
              style={{
                height: '100px',
                borderRadius: '8px',
                padding: '12px',
                border: selectedGridId.value === id ? '2px solid #3b82f6' : '1px solid #475569',
                background: selectedGridId.value === id ? '#1e3a8a' : '#0f172a',
                display: 'flex',
                alignItems: 'flex-end',
                fontWeight: 'bold',
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              {id}
            </div>
          ))}
        </div>
      </div>
    </KeybindRegistryControl>
  );
});

// ==========================================
// 3. Main Route Root
// ==========================================
export default component$(() => {
  const controls = useKeybindRegistryControls();

  useKeybindRegistry({ controls, action: 'action:cancel' }, $(() => {
    console.log('Global Escape action triggered on Provider!');
  }));

  return (
    <KeybindRegistryProvider modules={[vimModule]} controls={controls}>
      <div style={{ padding: '2rem', fontFamily: 'sans-serif', background: '#0f172a', color: '#f8fafc', minHeight: '100vh' }}>
        <h2 style={{ marginBottom: '0.5rem' }}>Scoped Event-Propagating Keybind Dashboard</h2>
        <div style={{ border: '2px solid #334155', borderRadius: '12px', padding: '16px', maxWidth: '800px', background: '#1e293b' }}>
          <HeaderToolbar />
          <GridBody />
        </div>
      </div>
    </KeybindRegistryProvider>
  );
});
