import type { ProcessOptions } from '@kkna/core'

import { createContext } from '@lit/context'

export const processContext = createContext<ProcessOptions>({})
