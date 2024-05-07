import { process } from '@kkna/core'
import { describe, expect, it } from 'vitest'

import { openheart } from '../src'

describe('api.openheart.fyi', () => {
  it('heart', async () => {
    const result = await process({
      overrides: { url: { href: 'https://example.com' } },
      presets: [openheart({
        endpoint: new URL('https://api.openheart.fyi'),
      })],
    })
    expect(Object.keys(result.reactions?.emojis ?? {})).toStrictEqual(['❤️', '🫀', '🥨'])
  })
})
