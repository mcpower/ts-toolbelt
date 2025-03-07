import {At} from './At'
import {Replace} from '../Union/Replace'
import {x} from '../Any/x'
import {Exclude} from '../Union/Exclude'
import {List} from './List'

/** Modify **`L`** with **`LMod`** & the [[x]] placeholder
 * @param L to copy from
 * @param LMod to copy to
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Modify<L extends List, LMod extends List> = {
    [K in keyof LMod]: Replace<LMod[K], x, Exclude<At<L, K>, undefined>>
} & {}
