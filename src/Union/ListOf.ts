import {Last} from './Last'
import {Prepend} from '../List/Prepend'
import {Exclude} from './Exclude'
import {List} from '../List/List'
import {Union} from './Union'
import {Cast} from '../Any/Cast'

/**
 * @hidden
 */
type _ListOf<U, LN extends List = [], LastU = Last<U>> = {
    0: _ListOf<Exclude<U, LastU>, Prepend<LN, LastU>>
    1: LN
}[
    [U] extends [never]
    ? 1
    : 0
]

/** Transform a [[Union]] into a [[List]]
 * (⚠️ it might not preserve order)
 * @param U to transform
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type ListOf<U extends Union> =
    _ListOf<U> extends infer X
    ? Cast<X, List>
    : never

// ! must not be distributed
