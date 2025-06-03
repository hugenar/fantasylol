import type { ComponentProps } from "react";
import type { NumberFieldProps as AriaNumberFieldProps } from "react-aria-components";
import { Input as AriaInput, Group } from "react-aria-components";
type NumberFieldPreset = "normal" | "dimmed";
export declare function NumberField({ inputProps, groupProps, children, preset, ...props }: AriaNumberFieldProps & {
    inputProps?: ComponentProps<typeof AriaInput>;
    groupProps?: ComponentProps<typeof Group>;
    preset?: NumberFieldPreset;
}): import("react/jsx-runtime").JSX.Element;
export {};
