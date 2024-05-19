<script setup>
  import { hatsu } from '@kkna/preset-hatsu'
  import 'kkna'
  import { provider } from 'kkna/context'

  const provide = provider(document.body, {
    initialValue: {
      overrides: {
        url: new URL('https://kwaa-blog-next.deno.dev/articles/test/'),
      },
      presets: [
        hatsu({ instance: 'https://hatsu-nightly-debug.hyp3r.link' }),
      ],
    },
  })

  provide.hostConnected()
</script>

# Example

This is an [`@kkna/component-material`](../components/material.md) example using the [`@kkna/preset-hatsu`](../presets/hatsu.md) preset.

<ClientOnly>
  <kkna-material></kkna-material>
</ClientOnly>

## Code

```ts
import { hatsu } from '@kkna/preset-hatsu'
import 'kkna'
import { provider } from 'kkna/context'

const provide = provider(document.body, {
  initialValue: {
    overrides: {
      url: new URL('https://kwaa-blog-next.deno.dev/articles/test/'),
    },
    presets: [
      hatsu({ instance: 'https://hatsu-nightly-debug.hyp3r.link' }),
    ],
  },
})

provide.hostConnected()
```

```html
<kkna-material></kkna-material>
```

## Comments / Reactions

You can send comments/reactions to https://hatsu-nightly-debug.hyp3r.link/posts/https://kwaa-blog-next.deno.dev/articles/test/, which will be displayed here.
