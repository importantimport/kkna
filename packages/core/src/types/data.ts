export interface Data extends Record<string, unknown> {
  /**
   * @default
   * ```ts
   * new URL(globalThis.location.href)
   * ```
   */
  url: URL

  vendors?: DataVendors
}

export interface DataVendors {
  /**
   * Simple Icons URL.
   * @param slug Icon Slug
   * @returns Icon URL
   * @example
   * ```ts
   * // jsdelivr
   * const simpleIcons = (slug) => `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg`
   * // unpkg
   * const simpleIcons = (slug) => `https://unpkg.com/simple-icons@v11/icons/${slug}.svg`
   * // simple-icons-cdn
   * const simpleIcons = (slug) => `https://cdn.simpleicons.org/${slug}`
   * ```
   */
  simpleIcons?: (slug: string) => string
}
