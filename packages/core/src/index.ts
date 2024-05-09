export type { Author } from './types/author.ts'
export type { Comment } from './types/comment.ts'
export type { CustomEmoji } from './types/custom-emoji.ts'
export type { Data, DataVendors } from './types/data.ts'
export type { Reactions } from './types/reactions.ts'

export { type Preset, type PresetTask, definePreset, definePresetTask } from './utils/preset.ts'
export { type ProcessOptions, type ProcessOverrides, type ProcessResult, process, processComments, processData, processEmojis } from './utils/process.ts'
