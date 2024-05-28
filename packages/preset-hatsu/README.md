# @kkna/preset-hatsu

Hatsu Preset for [KKna](https://github.com/importantimport/kkna).

<!-- automd:badges color="gray" license -->

[![npm version](https://img.shields.io/npm/v/@kkna/preset-hatsu?color=gray)](https://npmjs.com/package/@kkna/preset-hatsu)
[![npm downloads](https://img.shields.io/npm/dm/@kkna/preset-hatsu?color=gray)](https://npmjs.com/package/@kkna/preset-hatsu)
[![license](https://img.shields.io/github/license/importantimport/kkna?color=gray)](https://github.com/importantimport/kkna/blob/main/LICENSE)

<!-- /automd -->

## Usage

### NPM

###### install

<!-- automd:pm-install auto=false -->

```sh
# npm
npm install @kkna/preset-hatsu

# yarn
yarn add @kkna/preset-hatsu

# pnpm
pnpm install @kkna/preset-hatsu

# bun
bun install @kkna/preset-hatsu
```

<!-- /automd -->

###### use

<!-- automd:file src="test/fixture/provide.ts" code -->

```ts [provide.ts]
import { provider } from '@kkna/context'
import { hatsu } from '@kkna/preset-hatsu'

const provide = provider(document.body, {
  initialValue: {
    presets: [
      hatsu({ instance: 'https://hatsu.local' }),
    ],
  },
})

provide.hostConnected()
```

<!-- /automd -->

## License

MIT
