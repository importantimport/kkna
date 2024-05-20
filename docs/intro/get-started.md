# Getting Started

To use KKna, you need to set up two parts: the context and the component.

## Context

Make sure the context is above the component (and component import).

here I'm using [`@kkna/preset-hatsu`](../presets/hatsu.md) as an example, you can change it to the preset you need.

```html
<script type="module">
  import { hatsu } from 'https://esm.sh/@kkna/preset-hatsu'
  import { defineConfig } from 'https://esm.sh/@kkna/context'

  defineConfig({
    presets: [
      hatsu({ instance: 'https://hatsu.local' }),
    ],
  })
</script>
```

That's it!

## Component

Just use it like any other Web Components.

```html
<script type="module" src="https://esm.sh/@kkna/component-material"></script>
<kkna-material></kkna-material>
```

Components may also have configurable properties, see the documentation for the component.
