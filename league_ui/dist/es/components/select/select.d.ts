import type { ReactNode } from "react";
import type { SelectProps as AriaSelectProps, ListBoxItemProps } from "react-aria-components";
interface SelectProps<T extends object> extends Omit<AriaSelectProps<T>, "children"> {
    label?: string;
    description?: string;
    errorMessage?: string;
    children?: ReactNode | ((item: T) => ReactNode);
}
export declare function Select<T extends object>({ description, errorMessage, children, className, ...props }: SelectProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function Item({ className, ...props }: ListBoxItemProps): import("react/jsx-runtime").JSX.Element;
export {};
