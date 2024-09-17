// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'

import DefaultTheme from 'vitepress/theme-without-fonts'
import { h } from 'vue'

import './style.css'

export default {
  // enhanceApp({ app, router, siteData }) {
  //   // ...
  // },
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    // https://vitepress.dev/guide/extending-default-theme#layout-slots
  }),
} satisfies Theme
