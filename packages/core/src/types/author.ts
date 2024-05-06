import type { FFFAuthor } from 'fff-flavored-frontmatter'

type AuthorBase = Required<Pick<FFFAuthor, 'name'>> & Omit<FFFAuthor, 'name'>

/** Inspired by {@link https://docs.joinmastodon.org/entities/Account/} */
interface AuthorFedi {
  /** @example 'noiob@awoo.space' */
  acct?: string
  /** @example 'noiob' */
  username?: string
}

export type Author = AuthorBase & AuthorFedi
