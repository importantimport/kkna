# @kkna/preset-openheart

OpenHeart Preset for [KKna](https://github.com/importantimport/kkna).

<!-- automd:badges color="gray" license -->

[![npm version](https://img.shields.io/npm/v/@kkna/preset-openheart?color=gray)](https://npmjs.com/package/@kkna/preset-openheart)
[![npm downloads](https://img.shields.io/npm/dm/@kkna/preset-openheart?color=gray)](https://npmjs.com/package/@kkna/preset-openheart)
[![license](https://img.shields.io/github/license/importantimport/kkna?color=gray)](https://github.com/importantimport/kkna/blob/main/LICENSE)

<!-- /automd -->

## Usage

### NPM

###### install

<!-- automd:pm-install auto=false -->

```sh
# npm
npm install @kkna/preset-openheart

# yarn
yarn add @kkna/preset-openheart

# pnpm
pnpm install @kkna/preset-openheart

# bun
bun install @kkna/preset-openheart
```

<!-- /automd -->

###### use

<!-- automd:file src="test/fixture/provide.ts" code -->

```ts [provide.ts]
import { provider } from '@kkna/context'
import { openheart } from '@kkna/preset-openheart'

const provide = provider(document.body, {
  initialValue: {
    presets: [
      openheart({ endpoint: 'https://api.openheart.fyi' }),
    ],
  },
})

provide.hostConnected()

```

<!-- /automd -->

## License

MIT
