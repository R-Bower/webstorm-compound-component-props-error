import type {ReactElement, ReactNode} from "react"

export interface ExampleRootProps {
  /**
   * React {@link https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children children} prop.
   */
  children?: ReactNode

  someProp: string
}

export function ExampleRoot({someProp}: ExampleRootProps): ReactElement {
  return <div>{someProp}</div>
}
