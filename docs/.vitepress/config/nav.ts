import type { DefaultTheme } from 'vitepress'

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
]
