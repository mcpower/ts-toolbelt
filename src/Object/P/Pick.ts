import {IterationOf} from '../../Iteration/IterationOf'
import {Iteration} from '../../Iteration/Iteration'
import {Pos} from '../../Iteration/Pos'
import {Next} from '../../Iteration/Next'
import {Path as PPath} from './_Internal'
import {Index} from '../../Any/Index'
import {Pick as OPick} from '../Pick'
import {EndOf} from '../../Tuple/EndOf'
import {Tuple} from '../../Tuple/Tuple'

type _Pick<O extends object, Path extends Tuple<Index>, I extends Iteration = IterationOf<'0'>> =
  OPick<O, Path[Pos<I>]> extends infer Picked // Pick the first Path
  ? {
      [K in keyof Picked]:
        Picked[K] extends infer Prop          // Needed for the below to be distributive
        ? Pos<I> extends EndOf<Path>          // If it's the target
          ? Prop                              //   Pick it
          : Prop extends (infer A)[]          // Else, if it's an array
            ? A extends object                //   If it's an array of objects
              ? _Pick<A, Path, Next<I>>[]     //     Continue diving into array items
              : Prop                          //   Else, pick property for unions
            : Prop extends object             // Else, if it's an object
              ? _Pick<Prop, Path, Next<I>>    //   Continue diving
              : Prop                          // Else, pick property for unions
        : never
    }
  : never

/** Extract out of **`O`** the fields at **`Path`**
 * (⚠️ this type is expensive)
 * @param O to extract from
 * @param Path to be followed
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Pick<O extends object, Path extends PPath> =
    _Pick<O, Path>
