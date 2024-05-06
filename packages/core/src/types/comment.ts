import type { Author } from './author'

interface CommentBase {
  /** author */
  author: Author
  /** content_html */
  content: string
  /** date_published */
  published: Date
  /** url */
  url?: URL
}

/** Inspired by {@link https://docs.joinmastodon.org/entities/Status/} */
interface CommentFedi {

}

export type Comment = CommentBase & CommentFedi
