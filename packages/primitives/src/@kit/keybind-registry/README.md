# `@onwo/primitives/keybind-registry`

A scoped, event-propagating keybinding and freeform text capture engine built for **Qwik**.

---

## 🧭 Mental Model: Provider vs. Control

Understanding the distinction between `<KeybindRegistryProvider />` and `<KeybindRegistryControl />` is essential for structuring keyboard navigation across nested UI regions.

```
┌────────────────────────────────────────────────────────────────────────┐
│ <KeybindRegistryProvider modules={[vimModule]}>                       │
│  (Global Scope: Document-wide listening & shared key mappings)         │
│                                                                        │
│  ├── Global Keybinds: [Escape] -> "action:cancel"                      │
│  ├── Global Capture: [Freeform Typing] -> Focus Search Bar             │
│  ├── Topbar Actions: "navigate:right" -> Move active Header button      │
│  │                                                                     │
│  └── <KeybindRegistryControl controls={gridControls}>                  │
│       (Scoped Boundary: Active when focus is INSIDE this DOM element)  │
│                                                                        │
│       └── Local Action: "navigate:right" -> Move active Grid Card      │
│           (Intercepts event & stops propagation to Provider)           │
└────────────────────────────────────────────────────────────────────────┘
```

| Feature | `<KeybindRegistryProvider />` | `<KeybindRegistryControl />` |
| :--- | :--- | :--- |
| **Scope** | Global (Document-wide) | Local (DOM subtree scope) |
| **Event Listener** | Listens on `document` | Listens on component host element |
| **Use Case** | Global shortcuts, layout mappings (`vimModule`), global search capture | Data grids, sidebars, modals, canvases, list items |
| **Key Modules** | Defines primary key-to-action maps (`l` ➔ `navigate:right`) | Inherits parent modules from Provider automatically |
| **Event Propagation** | Fallback handler when no child control intercepts | Intercepts keys & stops propagation to parent/provider |

---

## 💡 Core Concepts

### 1. Action Abstraction & Fallback Modules

Components listen for **semantic actions** (`navigate:right`) rather than hardcoding physical key strings (`"l"`, `"ArrowRight"`) throughout the codebase.

```
[ Physical Key: 'l' ] ────────► [ Vim Module ] ───────┐
                                                     ├─► [ Action: 'navigate:right' ] ──► useKeybindRegistry({ action })
[ Physical Key: 'ArrowRight' ] ─► [ Default Module ] ──┘
```

The provider automatically includes `defaultModule` as a standard fallback mapping:

- `ArrowRight` ➔ `navigate:right`
- `ArrowLeft` ➔ `navigate:left`
- `ArrowUp` ➔ `navigate:up`
- `ArrowDown` ➔ `navigate:down`
- `Home` ➔ `navigate:top`
- `End` ➔ `navigate:bottom`
- `PageUp` ➔ `navigate:page-up`
- `PageDown` ➔ `navigate:page-down`
- `Escape` ➔ `action:cancel`
- `Enter` ➔ `action:submit`

---

### 2. Smart Capture Heuristics & Lookback Engine

If physical key `l` is bound to `navigate:right`, what happens when a user types `"left"` while focused on an un-focused page canvas?

`KeybindRegistry` uses a timing buffer and lookback recovery engine to resolve single-key shortcuts vs. continuous typing stream ambiguity:

```
                          Key Press: 'l'
                                │
                   Is 'l' bound to a Keybind/Action?
                                │
               ┌────────────────┴────────────────┐
              YES                               NO
               │                                 │
     Start Buffer Timer (200ms)          Pass immediately to
     Hold 'l' in Buffer                  useKeybindCapture()
               │
   Next Key within 200ms?
               │
    ┌──────────┴────────────────────────┐
  'e' arrives                      Timer Expires
    │                                   │
Is 'l e' a chord sequence?       Execute 'l' keybind action
    ├─► YES: Execute 'l e'       Store 'l' in lookback buffer
    └─► NO:  User typing text!          │
             Flush "le" to Capture      Next key 'e' within 300ms?
                                        ├─► YES: Recover 'l', flush "le" to Capture
                                        └─► NO: Keep single action execution
```

- **Rapid Typing Stream**: If `'e'` arrives within `delay` (default: `200ms`), the sequence `'l e'` is recognized as freeform text and flushes immediately to `useKeybindCapture` as `"le"`.
- **Lookback Recovery**: If the user pauses slightly, causing `'l'` to execute `navigate:right`, but types `'e'` within the `lookback` window (default: `300ms`), the engine recovers `'l'`, combines it with `'e'`, and flushes `"le"` to the capture handler—ensuring search inputs receive `"left"` instead of `"eft"`.

---

## 🛠️ Usage Patterns

### Scenario 1: Global Keybinds (Provider Scope)

When you **omit** the `controls` parameter from `useKeybindRegistry` or `useKeybindCapture`, the hook attaches directly to the root **Provider context**.

```tsx
import { component$, $ } from '@qwik.dev/core';
import {
  KeybindRegistryProvider,
  useKeybindRegistry,
  useKeybindCapture,
  defineKeybindModule
} from '@onwo/ui-keybind-registry';

const vimModule = defineKeybindModule({
  name: 'vim',
  mappings: {
    'l': 'navigate:right',
    'h': 'navigate:left',
  },
});

export const App = component$(() => {
  // Global action handler (Provider scope)
  useKeybindRegistry({ action: 'navigate:right' }, $(() => {
    console.log('Topbar / Document moved right!');
  }));

  // Global search input capture
  useKeybindCapture({ delay: 200, lookback: 300 }, $((capturedText) => {
    console.log('Captured typing stream:', capturedText);
  }));

  return (
    <KeybindRegistryProvider modules={[vimModule]}>
      <div>App Shell</div>
    </KeybindRegistryProvider>
  );
});
```

---

### Scenario 2: Scoped Component Keybinds (Control Scope)

When you want a sub-section (e.g., a **Grid**, **Modal**, or **Canvas**) to execute local handlers when focused—without triggering topbar or document actions—create local controls with `useKeybindRegistryControls()` and bind them to `<KeybindRegistryControl />`.

```tsx
import { component$, $ } from '@qwik.dev/core';
import {
  KeybindRegistryControl,
  useKeybindRegistryControls,
  useKeybindRegistry
} from '@onwo/ui-keybind-registry';

export const GridComponent = component$(() => {
  // 1. Create a local control instance
  const controls = useKeybindRegistryControls();

  // 2. Register local action on control store
  useKeybindRegistry({ controls, action: 'navigate:right' }, $(() => {
    console.log('Navigated right inside Grid!');
    // Executing this local action automatically stops propagation to Provider!
  }));

  return (
    <KeybindRegistryControl controls={controls} data-control-id="grid-body" tabIndex={0}>
      <div tabIndex={0}>Card 2:1</div>
      <div tabIndex={0}>Card 2:2</div>
    </KeybindRegistryControl>
  );
});
```

---

## 📜 Full Working Example

```tsx
import { component$, $, useSignal } from '@qwik.dev/core';
import {
  KeybindRegistryProvider,
  KeybindRegistryControl,
  useKeybindRegistryControls,
  useKeybindRegistry,
  useKeybindCapture,
  defineKeybindModule
} from '@onwo/ui-keybind-registry';

const vimModule = defineKeybindModule({
  name: 'vim',
  mappings: { 'l': 'navigate:right', 'h': 'navigate:left' }
});

export const Topbar = component$(() => {
  const searchInputRef = useSignal<HTMLInputElement>();
  const query = useSignal('');

  // Topbar action on Provider context
  useKeybindRegistry({ action: 'navigate:right' }, $(() => {
    console.log('Moved right on Topbar');
  }));

  // Global search input capture
  useKeybindCapture({ delay: 200, lookback: 300 }, $((capturedText) => {
    query.value += capturedText;
    searchInputRef.value?.focus();
  }));

  return (
    <div data-control-id="header">
      <input ref={searchInputRef} bind:value={query} placeholder="Search..." />
      <button data-item-id="1:1">1:1</button>
      <button data-item-id="1:2">1:2</button>
    </div>
  );
});

export const Grid = component$(() => {
  const controls = useKeybindRegistryControls();

  // Grid action on local Control context
  useKeybindRegistry({ controls, action: 'navigate:right' }, $(() => {
    console.log('Moved right on Grid');
  }));

  return (
    <KeybindRegistryControl controls={controls} data-control-id="grid-body" tabIndex={0}>
      <div data-item-id="2:1" tabIndex={0}>Card 2:1</div>
      <div data-item-id="2:2" tabIndex={0}>Card 2:2</div>
    </KeybindRegistryControl>
  );
});

export default component$(() => {
  return (
    <KeybindRegistryProvider modules={[vimModule]}>
      <Topbar />
      <Grid />
    </KeybindRegistryProvider>
  );
});
```

---

## 📄 License

MIT © [ONWO UI](https://github.com/onwo-ui)
