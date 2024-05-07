import type { DefaultTheme } from 'vitepress'

import { components, presets } from './nav'

export const sidebar: DefaultTheme.Sidebar = [
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
