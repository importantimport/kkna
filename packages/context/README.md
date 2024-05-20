# @kkna/context

<!-- automd:badges color="gray" license -->

[![npm version](https://img.shields.io/npm/v/@kkna/context?color=gray)](https://npmjs.com/package/@kkna/context)
[![npm downloads](https://img.shields.io/npm/dm/@kkna/context?color=gray)](https://npmjs.com/package/@kkna/context)
[![license](https://img.shields.io/github/license/importantimport/kkna?color=gray)](https://github.com/importantimport/kkna/blob/main/LICENSE)

<!-- /automd -->

## Usage

### NPM

###### install

<!-- automd:pm-install auto=false -->

```sh
# npm
npm install @kkna/context

# yarn
yarn add @kkna/context

# pnpm
pnpm install @kkna/context

# bun
bun install @kkna/context
```

<!-- /automd -->

###### context

```ts
import { context } from '@kkna/context'
import { consume } from '@lit/context'
import { LitElement, html } from 'lit'

class MyElement extends LitElement {
  @consume({ context, subscribe: true })
  public processOptions?: ProcessOptions

  render() {
    return html`<pre><code>
      ${JSON.stringify(this.processOptions, null, 2)}
    </code></pre>`
  }
}
```

###### consumer

```ts
import { consumer } from '@kkna/context'
import { LitElement, html } from 'lit'

class MyElement extends LitElement {
  public processOptions = consumer(this, { subscribe: true })

  render() {
    return html`<pre><code>
      ${JSON.stringify(this.processOptions.value, null, 2)}
    </code></pre>`
  }
}
```

###### provider

```ts
import { provider } from '@kkna/context'

const provide = provider(document.body, {
  initialValue: {
    data: { ...data },
    presets: [...presets],
  },
})
```

###### defineConfig (experimental)

```ts
import { defineConfig } from '@kkna/context'

defineConfig({
  data: { ...data },
  presets: [...presets],
})
```

<!-- ### CDN -->

## License

MIT
