import { describe, expect, it } from 'vitest'

import { process } from '../src/utils/process'
import { flat } from './fixture/flat'

describe('@kkna/core/in_reply_to', () => {
  it('in_reply_to', async () => {
    const result = await process({
      overrides: { url: new URL('https://localhost') },
      presets: [flat({})],
    })

    expect(result.comments?.length).toBe(3)
    expect(result.comments?.[0].id).toBe('foo')
    expect(result.comments?.[1].id).toBe('bar')
    expect(result.comments?.[2].id).toBe('baz')
  })
})
