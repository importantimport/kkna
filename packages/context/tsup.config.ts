import { defineConfig } from 'tsup'

import config from '../../tsup.config'

export default defineConfig({
  ...config,
  dts: { resolve: true },
  entry: [
    'src/index.ts',
    'src/consume.ts',
    'src/context.ts',
    'src/provide.ts',
  ],
})
