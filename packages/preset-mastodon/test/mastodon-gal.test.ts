import { process } from '@kkna/core'
import { describe, expect, it } from 'vitest'

import { mastodon } from '../src'

describe('mastodon.gal', () => {
  it('mastodon', async () => {
    const result = await process({
      overrides: { url: { href: 'https://example.com' } },
      presets: [mastodon({
        // https://mastodon.gal/@misteroom/110810445656343599
        id: '110810445656343599',
        instance: 'https://mastodon.gal',
      })],
    })

    // eslint-disable-next-line no-console
    console.log(result)
    expect(result.comments?.length).toBeTypeOf('number')
    expect(result.reactions?.emojis?.['⭐']).toBeTypeOf('number')
    expect(result.reactions?.emojis?.['♺']).toBeTypeOf('number')
  })
})
