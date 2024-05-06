import { definePreset } from '@kkna/core'

export interface PresetOpenHeartOptions {
  /**
   * OpenHeart API Point.
   * @example 'https://api.openheart.fyi'
   */
  endpoint: URL | string
}

export const openheart = definePreset<{ openheart: PresetOpenHeartOptions }>(async ({ openheart }) => ({
  reactions: {
    emojis: await fetch(openheart.endpoint, { headers: { accept: 'application/json' } })
      .then(res => res.json()),
  },
}))
