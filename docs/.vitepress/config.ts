import { defineConfig } from 'vitepress'

import { themeConfig } from './config/theme'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  description: 'All-in-One, Easy-to-Use Comment Component.',
  head: [['link', { href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%22-.1em%22 y=%22.9em%22 font-size=%2280%22>💯</text></svg>', rel: 'icon', sizes: 'any' }]],
  themeConfig,
  title: 'KKna',
})
