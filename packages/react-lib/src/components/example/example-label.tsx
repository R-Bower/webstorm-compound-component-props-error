import type {ReactElement} from "react"

export interface ExampleLabelProps {
  label: string

  optionalProp?: string
}

export function ExampleLabel({label}: ExampleLabelProps): ReactElement {
  return <div>{label}</div>
}
