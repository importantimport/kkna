import type { Author } from './author'

interface CommentBase {
  /** author */
  author: Author
  /** content_html */
  content: string
  /** id or url */
  id: string
  /** in reply to id */
  in_reply_to_id?: string
  /** date_published */
  published: Date
  /** url */
  url?: URL
}

/** Inspired by {@link https://docs.joinmastodon.org/entities/Status/} */
interface CommentFedi {

}

interface CommentMetadata {
  replies: Comment[]
}

interface CommentSource {
  source?: {
    /**
     * Picture Icons.
     * @example `https://www.google.com/favicon.ico`
     */
    iconImage?: string
    /**
     * Icon from Simple Icons.
     * @see {@link https://icones.js.org/collection/simple-icons}
     * @example
     * ```ts
     * 'simple-icons:activitypub' => 'activitypub'
     * ```
     */
    iconSimple?: string
    /**
     * Source Link.
     * @example `https://example.com/posts/foo-bar`
     */
    link?: string
    /**
     * Source Alt Text.
     * @example `Example Domain`
     */
    text: string
  }
}

export type Comment = CommentBase & CommentFedi & CommentMetadata & CommentSource
