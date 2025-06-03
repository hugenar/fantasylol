import { type Ref } from "react";
import { type ButtonProps as AriaButtonProps } from "react-aria-components";
export type ButtonShape = "round" | "square" | "normal";
export type ButtonPreset = "primary" | "secondary" | "text" | "hextech" | "dimmed";
interface ButtonProps extends AriaButtonProps {
    preset?: ButtonPreset;
    thin?: boolean;
    shape?: ButtonShape;
}
export declare const button: (props?: ({
    preset?: "text" | "primary" | "secondary" | "hextech" | "dimmed" | undefined;
    isHovered?: boolean | undefined;
    isPressed?: boolean | undefined;
    isDisabled?: boolean | undefined;
    isFocused?: boolean | undefined;
    isFocusVisible?: boolean | undefined;
    shape?: "normal" | "round" | "square" | undefined;
    thin?: boolean | undefined;
} & ({
    class?: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | any | {
        [x: string]: any;
    } | null | undefined)[] | {
        [x: string]: any;
    } | null | undefined)[] | {
        [x: string]: any;
    } | null | undefined)[] | {
        [x: string]: any;
    } | null | undefined)[] | {
        [x: string]: any;
    } | null | undefined)[] | {
        [x: string]: any;
    } | null | undefined)[] | {
        [x: string]: any;
    } | null | undefined)[] | {
        [x: string]: any;
    } | null | undefined)[] | {
        [x: string]: any;
    } | null | undefined)[] | {
        [x: string]: any;
    } | null | undefined)[] | {
        [x: string]: any;
    } | null | undefined)[] | {
        [x: string]: any;
    } | null | undefined;
    className?: never;
} | {
    class?: never;
    className?: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | any | {
        [x: string]: any;
    } | null | undefined)[] | {
        [x: string]: any;
    } | null | undefined)[] | {
        [x: string]: any;
    } | null | undefined)[] | {
        [x: string]: any;
    } | null | undefined)[] | {
        [x: string]: any;
    } | null | undefined)[] | {
        [x: string]: any;
    } | null | undefined)[] | {
        [x: string]: any;
    } | null | undefined)[] | {
        [x: string]: any;
    } | null | undefined)[] | {
        [x: string]: any;
    } | null | undefined)[] | {
        [x: string]: any;
    } | null | undefined)[] | {
        [x: string]: any;
    } | null | undefined)[] | {
        [x: string]: any;
    } | null | undefined;
})) | undefined) => string;
export declare function _Button({ children, className, preset, shape, thin, ...props }: ButtonProps, ref: Ref<HTMLButtonElement>): import("react/jsx-runtime").JSX.Element;
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
