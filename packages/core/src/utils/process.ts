import type { Comment } from '../types/comment'
import type { Data } from '../types/data'
import type { Reactions } from '../types/reactions'
import type { Preset } from './preset'

export interface ProcessOptions {
  data?: Partial<Data> & Record<string, unknown>
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

export const processData = (data: ProcessOptions['data'], overrides?: ProcessOptions['overrides']): Data & Record<string, unknown> => ({
  ...data,
  url: new URL(
    overrides?.url?.href ?? globalThis.location.pathname,
    overrides?.url?.origin ?? globalThis.location?.origin,
  ),
})

export const processEmojis = (a: Reactions['emojis'], b: Reactions['emojis']): Reactions['emojis'] =>
  Object.entries(b ?? {})
    .reduce((acc, [emoji, count]) => ({ ...acc, [emoji]: (acc[emoji] || 0) + count }), a ?? {})

export const process = async ({ data, overrides, presets }: ProcessOptions = {}): Promise<ProcessResult> => {
  const processedData = processData(data, overrides)

  if (!presets)
    return {}

  return await Promise.all(presets.map(async preset => await preset(processedData)))
    .then(results => results.reduce((prev, curr) => ({
      comments: [...(prev.comments ?? []), ...(curr.comments ?? [])],
      reactions: {
        // custom_emojis: processCustomEmojis // TODO
        emojis: processEmojis(prev.reactions?.emojis, curr.reactions?.emojis),
      },
    }), {}))
}
