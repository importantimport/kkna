# @kkna/core

<!-- automd:badges color="gray" license -->

[![npm version](https://img.shields.io/npm/v/@kkna/core?color=gray)](https://npmjs.com/package/@kkna/core)
[![npm downloads](https://img.shields.io/npm/dm/@kkna/core?color=gray)](https://npmjs.com/package/@kkna/core)
[![license](https://img.shields.io/github/license/importantimport/kkna?color=gray)](https://github.com/importantimport/kkna/blob/main/LICENSE)

<!-- /automd -->

The core engine of [KKna](https://github.com/importantimport/kkna) without any presets.

## Usage

###### process

```ts
import { process } from '@kkna/core'
import { mastodon } from '@kkna/preset-mastodon'

const result = await process({
  data: {
    mastodon: {
      // https://fosstodon.org/@importantimport/111211120931974745
      id: '111211120931974745',
      instance: 'https://fosstodon.org',
    }
  },
  presets: [mastodon],
})

/** @type {import('@kkna/core').ProcessResult} */
console.log(result)
```

###### definePreset

```ts
import { definePreset } from '@kkna/core'

export const myPreset = definePreset<{ myPreset: MyPresetOptions }>(async ({ myPreset }) => ({
  comments: { ...comments },
  reactions: { ...reactions },
}))
```

## License

MIT
