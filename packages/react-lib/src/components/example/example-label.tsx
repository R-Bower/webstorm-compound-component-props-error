import type {ReactElement} from "react"
import type {As, PolymorphicComponentPropsWithRef} from "../../system"

/**
 * @public
 * @interface
 */
export type ExampleLabelProps<C extends As = "div"> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      /**
       * The component used for the root node. It can be a React component or element.
       * @default 'div'
       */
      as?: C

      label?: string

      optionalProp?: string
    }
  >

export function ExampleLabel<C extends As = "div">({
  as,
  label,
  ...props
}: ExampleLabelProps<C>): ReactElement {
  const Element = as || "div"
  return <Element {...props}>{label}</Element>
}
