import { definePreset } from '@kkna/core'

import { fetchContext, transformContext } from './utils/comments'
import { fetchFavouritedBy, fetchRebloggedBy, transformReaction } from './utils/reactions'

export interface PresetMastodonOptions {
  /**
   * Mastodon Status ID.
   * @example '111211120931974745'
   */
  id: string
  /**
   * Mastodon Instance.
   * @example 'https://mastodon.social'
   */
  instance: URL['origin']
}

export const mastodon = definePreset<{ mastodon: PresetMastodonOptions }>(async ({ mastodon }) => ({
  comments: await fetchContext(mastodon.id, mastodon.instance)
    .then(context => transformContext(context)),
  reactions: {
    emojis: {
      '♺': await fetchRebloggedBy(mastodon.id, mastodon.instance)
        .then(accounts => transformReaction(accounts)),
      '⭐': await fetchFavouritedBy(mastodon.id, mastodon.instance)
        .then(accounts => transformReaction(accounts)),
    },
  },
}))
