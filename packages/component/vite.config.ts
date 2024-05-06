import UnocssPlugin from '@unocss/vite'
import { defineConfig } from 'vite'

import UnocssConfig from './uno.config'

export default defineConfig({
  plugins: [UnocssPlugin(UnocssConfig)],
})
