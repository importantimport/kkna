import { definePreset, definePresetTask } from '@kkna/core'
import { mastodon } from '@kkna/preset-mastodon'

export interface Options extends Record<string, unknown> {
  /**
   * Hatsu Instance.
   * @example 'https://hatsu.local'
   */
  instance: URL['origin']
}

export const hatsu = definePreset<Options>(options => ({
  name: 'hatsu',
  options,
  task: definePresetTask(async (data) => {
    /**
     * base64url encode
     * @see {@link https://hatsu.cli.rs/users/backfeed-based-on-mastodon-comments.html#examples}
     */
    const id = btoa(data.url.href).replaceAll('+', '-').replaceAll('/', '_')
    const { task } = mastodon({ ...options, id })

    return await task(data)
  }),
}))

export default hatsu
