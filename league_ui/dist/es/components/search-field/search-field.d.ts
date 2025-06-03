import type { ComponentProps } from "react";
import { Input as AriaInput, type SearchFieldProps as AriaSearchFieldProps } from "react-aria-components";
export declare function SearchField({ inputProps, borderProps, children, className, ...props }: AriaSearchFieldProps & {
    inputProps?: ComponentProps<typeof AriaInput>;
    borderProps?: ComponentProps<"div">;
}): import("react/jsx-runtime").JSX.Element;
