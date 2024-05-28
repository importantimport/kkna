import { definePreset, definePresetTask } from '@kkna/core'

export interface Options {
  /**
   * OpenHeart API Point.
   * @example 'https://api.openheart.fyi'
   */
  endpoint: URL | string
}

export const openheart = definePreset<Options>(options => ({
  name: 'openheart',
  options,
  task: definePresetTask(async () => ({
    reactions: {
      emojis: await fetch(options.endpoint, { headers: { accept: 'application/json' } })
        .then(res => res.json()),
    },
  })),
}))
