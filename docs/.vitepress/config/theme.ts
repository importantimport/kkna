import type { DefaultTheme } from 'vitepress'

import { nav } from './nav'
import { sidebar } from './sidebar'

// https://vitepress.dev/reference/default-theme-config
export const themeConfig: DefaultTheme.Config = {
  nav,
  sidebar,

  socialLinks: [
    { icon: 'github', link: 'https://github.com/importantimport/kkna' },
  ],
}
