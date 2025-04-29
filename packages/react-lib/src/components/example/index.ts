import {ExampleLabel, type ExampleLabelProps} from "./example-label"
import {ExampleRoot, type ExampleRootProps} from "./example-root"

export type {ExampleLabelProps, ExampleRootProps}

export const Example: {
  Label: typeof ExampleLabel
  Root: typeof ExampleRoot
} = {
  Label: ExampleLabel,
  Root: ExampleRoot,
}
