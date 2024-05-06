import { defineConfig } from 'tsup'

import config from '../../tsup.config'

export default defineConfig({
  ...config,
  entry: [
    'src/index.ts',
    'src/context.ts',
    'src/core.ts',
  ],
})
