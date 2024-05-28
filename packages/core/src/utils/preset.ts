import type { Data } from '../types/data'
import type { ProcessResult } from './process'

export type PresetTask = (data: Data) => ProcessResult | Promise<ProcessResult>

export interface Preset<T = unknown> {
  /**
   * Preset name.
   *
   * @example
   * ```ts
   * '@kkna/preset-mastodon' => 'mastodon'
   * '@kkna/preset-foo-bar' => 'foo-bar'
   * 'kkna-preset-baz-qux' => 'baz-qux'
   * ```
   */
  name: string
  /**
   * Preset options.
   */
  options: T
  /**
   * Preset task.
   * @param options - Preset options
   * @returns Process Result
   */
  task: PresetTask
}

export const definePreset = <T>(preset: (options: T) => Preset<T>) => preset

export const definePresetTask = (task: Preset['task']) => task
