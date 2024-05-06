import type { Account } from 'megalodon/lib/src/entities/account'

export const fetchRebloggedBy = async (id: string, instance: string) =>
  await fetch(new URL(`/api/v1/statuses/${id}/reblogged_by`, instance), {
    headers: { accept: 'application/json' },
  }).then(res => res.json()) as Account[]

export const fetchFavouritedBy = async (id: string, instance: string) =>
  await fetch(new URL(`/api/v1/statuses/${id}/favourited_by`, instance), {
    headers: { accept: 'application/json' },
  }).then(res => res.json()) as Account[]

export const transformReaction = (accounts: Account[]): number =>
  accounts.length
