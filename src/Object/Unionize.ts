import {At} from './At'
import {Key} from '../Any/Key'

/** Make the fields of **`O`** union the ones of **`O1`**
 * @param O to union from
 * @param O1 to union with
 * @param (?=`any`) K to chose fields
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Unionize<O extends object, O1 extends object, K extends Key = any> = {
    [P in keyof O]: P extends K ? O[P] | At<O1, P> : O[P]
} & {}
