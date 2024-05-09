import { describe, expect, it } from 'vitest'

import { process } from '../src/utils/process'
import { inReplyTo } from './fixture/in_reply_to'

describe('@kkna/core/in_reply_to', () => {
  it('in_reply_to', async () => {
    const result = await process({
      overrides: { url: new URL('https://localhost') },
      presets: [inReplyTo({})],
    })

    expect(result.comments?.length).toBe(1)
    expect(result.comments?.[0].id).toBe('foo')
    expect(result.comments?.[0].replies[0].id).toBe('bar')
    expect(result.comments?.[0].replies[0].replies[0].id).toBe('baz')
  })
})
