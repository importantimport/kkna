import { process } from '@kkna/core'
import { describe, expect, it } from 'vitest'

import { hatsu } from '../src'

describe('hatsu-nightly-debug.hyp3r.link', () => {
  it('hatsu', async () => {
    const result = await process({
      overrides: { url: { href: 'https://kwaa-blog-next.deno.dev/articles/test/' } },
      presets: [hatsu({
        instance: 'https://hatsu-nightly-debug.hyp3r.link',
      })],
    })

    // eslint-disable-next-line no-console
    console.log(result)
    expect(result.comments?.length).toBeTypeOf('number')
    expect(result.comments?.length).toBeGreaterThanOrEqual(3)
    expect(result.reactions?.emojis?.['⭐']).toBeTypeOf('number')
    expect(result.reactions?.emojis?.['♺']).toBeTypeOf('number')
  })
})
