import {FilterKeys} from './FilterKeys'
import {Index} from '../_Internal'

/** Get the keys of **`O`** that are compulsory
 * @param O
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type CompulsoryKeys<O extends object> =
    FilterKeys<O, undefined, '<-extends'> &
    FilterKeys<O, null, '<-extends'> &
    Index
