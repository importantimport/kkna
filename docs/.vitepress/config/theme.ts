import type { DefaultTheme } from 'vitepress'

import { nav } from './nav'
import { sidebar } from './sidebar'

// https://vitepress.dev/reference/default-theme-config
export const themeConfig: DefaultTheme.Config = {
  logo: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%22-.1em%22 y=%22.9em%22 font-size=%2280%22>💯</text></svg>',
  nav,
  sidebar,

  socialLinks: [
    { icon: 'github', link: 'https://github.com/importantimport/kkna' },
  ],
}
