# @kkna/preset-mastodon

Mastodon Preset for [KKna](https://github.com/importantimport/kkna).

<!-- automd:badges color="gray" license -->

[![npm version](https://img.shields.io/npm/v/@kkna/preset-mastodon?color=gray)](https://npmjs.com/package/@kkna/preset-mastodon)
[![npm downloads](https://img.shields.io/npm/dm/@kkna/preset-mastodon?color=gray)](https://npmjs.com/package/@kkna/preset-mastodon)
[![license](https://img.shields.io/github/license/importantimport/kkna?color=gray)](https://github.com/importantimport/kkna/blob/main/LICENSE)

<!-- /automd -->

## Usage

### NPM

###### install

<!-- automd:pm-install auto=false -->

```sh
# npm
npm install @kkna/preset-mastodon

# yarn
yarn add @kkna/preset-mastodon

# pnpm
pnpm install @kkna/preset-mastodon

# bun
bun install @kkna/preset-mastodon
```

<!-- /automd -->

###### use

<!-- automd:file src="test/fixture/provide.ts" code -->

```ts [provide.ts]
import { provider } from '@kkna/context'
import { mastodon } from '@kkna/preset-mastodon'

const provide = provider(document.body, {
  initialValue: {
    presets: [
      /** @see {@link https://mastodon.social/@Mastodon/112343541328038890} */
      mastodon({
        id: '112343541328038890',
        instance: 'https://mastodon.social',
      }),
    ],
  },
})

provide.hostConnected()

```

<!-- /automd -->

## License

MIT
