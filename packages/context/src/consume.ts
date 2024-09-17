import type { ReactiveControllerHost } from '@lit/reactive-element'

import { ContextConsumer, type ContextType } from '@lit/context'

import { context } from './context'

export interface ConsumerOptions {
  callback?: (value: ContextType<typeof context>, dispose?: () => void) => void
  subscribe?: boolean
}

export const consumer = (host: HTMLElement & ReactiveControllerHost, options?: ConsumerOptions) => new ContextConsumer(host, {
  ...options,
  context,
})
