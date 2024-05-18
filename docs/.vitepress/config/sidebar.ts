import type { DefaultTheme } from 'vitepress'

import { components, presets } from './nav'

export const sidebar: DefaultTheme.Sidebar = [
  {
    items: [
      {
        link: '/intro/about.md',
        text: 'About KKna',
      },
      {
        link: '/intro/get-started.md',
        text: 'Getting Started',
      },
    ],
    text: 'Introduction',
  },
  {
    collapsed: true,
    items: components,
    text: 'Components',
  },
  {
    collapsed: true,
    items: presets,
    text: 'Presets',
  },
]
