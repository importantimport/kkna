import type { Comment } from '@kkna/core'
import type { Context } from 'megalodon/lib/src/entities/context'

import { transformAccount } from './account'

export const fetchContext = async (id: string, instance: string) =>
  await fetch(new URL(`/api/v1/statuses/${id}/context`, instance), {
    headers: { accept: 'application/json' },
  }).then(res => res.json()) as Context

export const transformContext = ({ descendants }: Context, id: string): Comment[] =>
  descendants.map(status => ({
    author: transformAccount(status.account),
    content: status.content,
    emojis: status.emojis,
    id: status.id,
    in_reply_to_id: status.in_reply_to_id === id ? undefined : status.in_reply_to_id ?? undefined,
    published: new Date(status.created_at),
    replies: [],
    url: status.url ? new URL(status.url) : undefined,
  }))
