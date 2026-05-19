# @onwo/icons

Qwik implementation of the [Iconify](https://iconify.design/) database:
- 209 icon set
- 292,482 icons

Browse all icons provided on either:
- https://icon-sets.iconify.design/
- https://icones.js.org/

## Overview

`@onwo-ui/icons` redistributes the popular Lucide icon library as Qwik components.

## Features

- **Tree-shakeable** - Only bundle the icons you actually use
- **Qwik Optimized** - Built as native Qwik components for best performance
- **Consistent Design** - All icons follow the same design system
- **Fully Customizable** - Control size, color, and styling via props and CSS
- **TypeScript Support** - Full type definitions included


```javascript
import { dynamicIcon } from '@onwo/icons';
import { LucideIconSet } from '@onwo/iconset-lucide';

export const Icon = dynamicIcon()
    .provide(LucideIconSet, { default: true })
    .build();


```


## Usage with `@onwo/ui`:

`@onwo/ui` doesn't depend on any icon libraary, you will need to provide the
mapping manually.

Because they are decoupled you can mix and match icons from different library or provide your own all while ensuring consistency accross your codebase.

```javascript
import { dynamicIcon } from '@onwo/icons';
import { LucideIconSet } from '@onwo/iconset-lucide';

import { createUiProvider } from '~ui/icon-provider';

export const Icon = dynamicIcon()
    .provide(LucideIconSet, { default: true })
    .build();

export const UIProvider = createUiProvider().icons({
  'chevron-left': Icon.named('chevron-left'),
  'chevron-right': Icon.named('chevron-right'),
  'chevron-down': Icon.named('chevron-down'),
  // ...
});
```
