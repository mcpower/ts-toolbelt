import {IterationMap} from './IterationOf'
import {Iteration} from './Iteration'

/** Move **`I`**'s position backwards
 * @param I to move
 * @returns [[Iteration]]
 * @example
 * ```ts
 * import {I} from 'ts-toolbelt'
 *
 * type i = I.IterationOf<'20'>
 *
 * type test0 = I.Pos<i>         // 20
 * type test1 = I.Pos<I.Prev<i>> // 19
 * ```
 */
export type Prev<I extends Iteration> =
    IterationMap[I[0]] // continues iterating
