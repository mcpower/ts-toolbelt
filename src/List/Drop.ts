import {Tail} from './Tail'
import {Cast} from '../Any/Cast'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Number} from '../Number/Number'
import {Way} from '../Iteration/_Internal'
import {List} from './List'
import {Pos} from '../Iteration/Pos'
import {Prev} from '../Iteration/Prev'
import {Prepend} from './Prepend'
import {Naked} from './_Internal'

/**
 * @hidden
 */
type DropForth<L extends List, N extends Iteration> = {
    0: DropForth<Tail<L>, Prev<N>>
    1: L
}[
    0 extends Pos<N>
    ? 1
    : 0
]

/**
 * @hidden
 */
type DropBack<L extends List, N extends Iteration, I extends Iteration = Prev<N>, LN extends List = []> = {
    0: DropBack<L, N, Prev<I>, Prepend<LN, L[Pos<I>]>>
    1: LN
}[
    -1 extends Pos<I>
    ? 1
    : 0
]

/**
 * @hidden
 */
type _Drop<L extends List, N extends Iteration, way extends Way = '->'> = {
    '->': DropForth<L, N>
    '<-': DropBack<L, N>
}[way]

/**
 * @hidden
 */
export type __Drop<L extends List, N extends Number, way extends Way = '->'> =
    _Drop<Naked<L>, IterationOf<N>, way> extends infer X
    ? Cast<X, List>
    : never

/** Remove **`N`** entries out of **`L`**
 * @param L to remove from
 * @param N to remove out
 * @param way (?=`'->'`) to remove from end
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Drop<L extends List, N extends Number, way extends Way = '->'> =
    L extends unknown
    ? N extends unknown
      ? __Drop<L, N, way>
      : never
    : never
