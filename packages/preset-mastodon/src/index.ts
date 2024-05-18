import { definePreset, definePresetTask } from '@kkna/core'

import { fetchContext, transformContext } from './utils/comments'
import { fetchFavouritedBy, fetchRebloggedBy, transformReaction } from './utils/reactions'

export interface Options extends Record<string, unknown> {
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

export const mastodon = definePreset<Options>(options => ({
  name: 'mastodon',
  options,
  task: definePresetTask(async () => ({
    comments: await fetchContext(options.id, options.instance)
      .then(context => transformContext(context, options.id)),
    reactions: {
      emojis: {
        '♺': await fetchRebloggedBy(options.id, options.instance)
          .then(accounts => transformReaction(accounts)),
        '⭐': await fetchFavouritedBy(options.id, options.instance)
          .then(accounts => transformReaction(accounts)),
      },
    },
  })),
}))

export default mastodon
