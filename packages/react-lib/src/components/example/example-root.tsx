import type {ReactElement} from "react"
import type {As, PolymorphicComponentPropsWithRef} from "../../system"

/**
 * @public
 * @interface
 */
export type ExampleRootProps<C extends As = "div"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      /**
       * The component used for the root node. It can be a React component or element.
       * @default 'div'
       */
      as?: C

      someProp: string
    }
  >

export function ExampleRoot<C extends As = "div">({
  as,
  someProp,
  ...props
}: ExampleRootProps<C>): ReactElement {
  const Element = as || "div"
  return <Element {...props}>{someProp}</Element>
}
