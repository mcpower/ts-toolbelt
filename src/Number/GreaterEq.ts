import {Equals} from '../Any/Equals'
import {_Greater} from './Greater'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Number} from './Number'
import {Or} from '../Boolean/Or'

/**
 * @hidden
 */
export type _GreaterEq<N1 extends Iteration, N2 extends Iteration> =
    Or<Equals<N1, N2>, _Greater<N1, N2>>

/** Check if a [[Number]] is greater or equal to another one
 * @param N1 to compare
 * @param N2 to compare to
 * @returns [[Boolean]]
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt'
 *
 * type test0 = N.GreaterEq<'7', '5'> // True
 * type test1 = N.GreaterEq<'5', '5'> // True
 * type test2 = N.GreaterEq<'5', '7'> // False
 * ```
 */
export type GreaterEq<N1 extends Number, N2 extends Number> =
    _GreaterEq<IterationOf<N1>, IterationOf<N2>>
