import { compileLitTemplates } from '@lit-labs/compiler'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['es'],
    },
  },
  esbuild: { legalComments: 'external' },
  plugins: [
    typescript({
      declaration: true,
      transformers: {
        /**
         * need typescript@5.3.3
         * @see {@link https://github.com/lit/lit/issues/4460}
         */
        before: [compileLitTemplates()],
      },
    }),
  ],
})
