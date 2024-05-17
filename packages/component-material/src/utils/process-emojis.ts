import type { CustomEmoji } from '@kkna/core'

/**
 * Inspired by `oom-comments`
 * @see {@link https://github.com/oom-components/mastodon-comments/blob/f7ef1a99de46a1250865b833e3cc9cdb88df2f6e/src/comments.js#L191-L202}
 * @param html raw html string
 * @param emojis custom emoji array
 * @returns processed html string
 */
export const processEmojis = (html: string, emojis?: CustomEmoji[]) => emojis
  ? emojis
    .reduce((html, { shortcode, static_url, url }) => html.replace(
      `:${shortcode}:`,
      `<picture>
        <source srcset="${url}" media="(prefers-reduced-motion: no-preference)">
        <img src="${static_url ?? url}" alt=":${shortcode}:" title=":${shortcode}:" width="20" height="20" style="vertical-align: text-bottom">
      </picture>`,
    ), html)
  : html
