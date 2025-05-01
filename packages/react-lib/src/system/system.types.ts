import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ComponentType,
  ElementType,
  JSX,
  JSXElementConstructor,
} from "react"

export type As = ElementType | ComponentType

/**
 * Extract the props of a React element or component
 */
export type PropsOf<
  C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
> = JSX.LibraryManagedAttributes<C, ComponentPropsWithoutRef<C>>

export type AsProp<C extends As> = {
  /**
   * The component used for the root node. It can be a React component or element.
   */
  as?: C
}

export type MergeWithAs<C extends As, Props = object> = Props &
  AsProp<C> &
  Omit<PropsOf<C>, keyof Props>

/**
 * @public
 */
export type PolymorphicComponentPropsWithRef<
  C extends As,
  Props = object,
> = MergeWithAs<C, Props> & {ref?: PolymorphicRef<C>}

/**
 * Returns the type of ref for the polymorphic component.
 *
 * @public
 */
export type PolymorphicRef<C extends As> = ComponentPropsWithRef<C>["ref"]
