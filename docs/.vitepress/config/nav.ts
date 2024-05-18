import type { DefaultTheme } from 'vitepress'

import { version } from '../../../packages/kkna/package.json'

export const components: DefaultTheme.NavItemWithLink[] = [
  {
    link: '/components/material',
    text: 'Material',
  },
  {
    link: '/components/community',
    text: 'Community Components',
  },
]

export const presets: DefaultTheme.NavItemWithLink[] = [
  {
    link: '/presets/hatsu',
    text: 'Hatsu',
  },
  {
    link: '/presets/mastodon',
    text: 'Mastodon',
  },
  {
    link: '/presets/openheart',
    text: 'OpenHeart',
  },
  {
    link: '/presets/community',
    text: 'Community Presets',
  },
]

export const nav: DefaultTheme.NavItem[] = [
  {
    activeMatch: '^/components/',
    items: components,
    text: 'Components',
  },
  {
    activeMatch: '^/presets/',
    items: presets,
    text: 'Presets',
  },
  {
    link: `https://github.com/importantimport/kkna/releases/tag/v${version}`,
    text: version,
  },
]
