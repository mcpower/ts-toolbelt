import {MergeFlat} from './Merge'
import {NonNullable as UNonNullable} from '../Union/NonNullable'
import {Depth} from './_Internal'
import {Pick} from './Pick'
import {Key} from '../Any/Key'
import {Implements} from '../Any/Implements'
import {Keys} from './Keys'

/**
 * @hidden
 */
export type NonNullableFlat<O> = {
    [K in keyof O]: UNonNullable<O[K]>
} & {}

/**
 * @hidden
 */
export type NonNullableDeep<O> = {
    [K in keyof O]: NonNullableDeep<UNonNullable<O[K]>>
}

/**
 * @hidden
 */
type NonNullablePart<O extends object, depth extends Depth> = {
    'flat': NonNullableFlat<O>,
    'deep': NonNullableDeep<O>,
}[depth]

/** Make some fields of **`O`** not nullable (deeply or not)
 * (Optional fields will be left untouched & **`undefined`**)
 * @param O to make non nullable
 * @param (?=`any`) K to choose fields
 * @param (?=`'flat'`) depth to do it deeply
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type NonNullable<O extends object, K extends Key = any, depth extends Depth = 'flat'> = {
    1: NonNullablePart<O, depth>
    0: MergeFlat<NonNullablePart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K) -> non-nullable -> merge it with O
}[Implements<Keys<O>, K>]
