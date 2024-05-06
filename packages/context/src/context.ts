import type { ProcessOptions } from '@kkna/core'

import { createContext } from '@lit/context'

export const context = createContext<ProcessOptions>(Symbol.for('@kkna/context'))
