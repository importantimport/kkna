// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'

import DefaultTheme from 'vitepress/theme-without-fonts'
import { h } from 'vue'

import './style.css'

export default {
  Layout: () => h(DefaultTheme.Layout, null, {
    // https://vitepress.dev/guide/extending-default-theme#layout-slots
  }),
  // enhanceApp({ app, router, siteData }) {
  //   // ...
  // },
  extends: DefaultTheme,
} satisfies Theme
