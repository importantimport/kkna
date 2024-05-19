import { ContextProvider, type ContextType } from '@lit/context'

import { context } from './context'

export interface ProviderOptions {
  initialValue?: ContextType<typeof context>
}

/**
 * Context Provider Wrapper.
 * @param host HTMLElement
 * @param options ProviderOptions
 * @returns `new ContextProvider()`
 * @example
 * ```ts
 * import { provider } from '@kkna/context'
 * import { hatsu } from '@kkna/preset-hatsu'
 *
 * const provide = provider(document.body, {
 *   initialValue: {
 *     presets: [hatsu({ instance: 'https://hatsu.local' })]
 *   }
 * })
 * ```
 */
export const provider = (host: HTMLElement, options?: ProviderOptions) => new ContextProvider(host, {
  ...options,
  context,
})
