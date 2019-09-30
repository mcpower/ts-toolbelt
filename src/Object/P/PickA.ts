import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Path as PPath} from './_Internal'
import {Index} from '../../Any/Index'
import {Pick as OPick} from '../Pick'
import {EndOf} from '../../Tuple/EndOf'
import {Tuple} from '../../Tuple/Tuple'

type _PickA<O extends object, Path extends Tuple<Index>, I extends Iteration = IterationOf<'0'>> =
  OPick<O, Path[Pos<I>]> extends infer Picked // Pick the first Path.
  ? { [K in keyof Picked]: _PickAAux<Picked[K], Path, I> }
  : never

// This auxiliary type is required for correct conditional type behaviour.
// See https://github.com/microsoft/TypeScript/issues/33669.
type _PickAAux<P, Path extends Tuple<Index>, I extends Iteration> =
  Pos<I> extends EndOf<Path>       // If it's the target
  ? P                              //   Pick it
  : P extends (infer A)[]          // Else, if it's an array
    ? A extends object             //   If it's an array of objects
      ? _PickA<A, Path, Next<I>>[] //     Continue diving into array items
      : P                          //   Else, pick property for unions
    : P extends object             // Else, if it's an object
      ? _PickA<P, Path, Next<I>>   //   Continue diving
      : P                          // Else, pick property for unions

/** Extract out of **`O`** the fields at **`Path`**, picking into one-dimensional arrays
 * (⚠️ this type is expensive)
 * @param O to extract from
 * @param Path to be followed
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type PickA<O extends object, Path extends PPath> =
    _PickA<O, Path>

type test = PickA<{ a: {b: number, c: string}[] | {b: string} | string, d: string }, ['a', 'b']>
