/** A [[List]]
 * @param A its type
 * @returns **`any[]`**
 * @example
 * ```ts
 * type list0 = [1, 2, 3]
 * type list1 = number[]
 * ```
 */
export type List<A = any> = ReadonlyArray<A>
