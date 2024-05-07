export interface Data extends Record<string, unknown> {
  /**
   * @default
   * ```ts
   * new URL(globalThis.location.href)
   * ```
   */
  url: URL
}
