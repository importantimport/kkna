import { presetTypography } from '@unocss/preset-typography'
import { presetUno } from '@unocss/preset-uno'
import { defineConfig } from '@unocss/vite'

export default defineConfig({
  mode: 'shadow-dom',
  presets: [
    presetUno(),
    presetTypography(),
  ],
})
