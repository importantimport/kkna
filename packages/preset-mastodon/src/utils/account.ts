import type { Author } from '@kkna/core'
import type { Account } from 'megalodon/lib/src/entities/account'

export const transformAccount = (account: Account): Author => ({
  acct: account.acct,
  avatar: account.avatar,
  name: account.display_name,
  username: account.username,
})
