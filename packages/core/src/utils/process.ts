import type { Comment } from '../types/comment'
import type { Data } from '../types/data'
import type { Reactions } from '../types/reactions'
import type { Preset } from './preset'

export interface ProcessOptions {
  data?: Partial<Data>
  overrides?: ProcessOverrides
  presets?: Preset[]
}

export interface ProcessOverrides {
  url?: {
    href?: URL['href']
    origin?: URL['origin']
  }
}

export interface ProcessResult {
  comments?: Comment[]
  reactions?: Reactions
}

export const processData = (data: ProcessOptions['data'], overrides: ProcessOptions['overrides']): Data => ({
  ...data,
  url: new URL(
    overrides?.url?.href ?? globalThis.location.pathname,
    overrides?.url?.origin ?? globalThis.location?.origin,
  ),
  vendors: {
    simpleIcons: data?.vendors?.simpleIcons ?? (slug => `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg`),
  },
})

export const processEmojis = (a: Reactions['emojis'], b: Reactions['emojis']): Reactions['emojis'] =>
  Object.entries(b ?? {})
    .reduce((acc, [emoji, count]) => ({ ...acc, [emoji]: (acc[emoji] || 0) + count }), a ?? {})

export const processComments = (comments: Comment[], parent: string | undefined = undefined): Comment[] =>
  comments
    .filter(comment => comment.in_reply_to_id === parent)
    .map(comment => ({ ...comment, replies: processComments(comments, comment.id) }))

export const process = async (options: ProcessOptions = {}): Promise<ProcessResult> => {
  const data = processData(options.data, options.overrides)
  const comments: Comment[] = []
  let emojis: Reactions['emojis'] = {}

  if (!options.presets)
    return {}

  for (const preset of options.presets) {
    const result = await preset.task(data)
    data[`_${preset.name}`] = preset.options
    emojis = processEmojis(emojis, result.reactions?.emojis)
    if (result.comments)
      comments.push(...processComments(result.comments))
  }

  return {
    comments,
    reactions: { emojis },
  }
}
