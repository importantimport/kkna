// import type { CustomEmoji } from './custom-emoji'

export interface Reactions {
  // custom_emojis?: CustomEmojiReaction[] // TODO
  emojis?: Record<string, number>
}
