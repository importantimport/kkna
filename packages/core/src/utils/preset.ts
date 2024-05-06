import type { Data } from '../types/data'
import type { ProcessResult } from './process'

export type Preset<T extends Record<string, unknown> = Record<string, unknown>> = (config: Data & T) => ProcessResult | Promise<ProcessResult>

export const definePreset = <T extends Record<string, unknown> = Record<string, unknown>>(preset: Preset<T>) => preset
