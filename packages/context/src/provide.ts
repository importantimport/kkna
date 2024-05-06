import { ContextProvider, type ContextType } from '@lit/context'

import { context } from './context'

export interface ProviderOptions {
  initialValue?: ContextType<typeof context>
}

export const provider = (host: HTMLElement, options?: ProviderOptions) => new ContextProvider(host, {
  ...options,
  context,
})
