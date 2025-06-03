import { type Ref } from "react";
import { type LinkProps } from "react-aria-components";
import { type ButtonPreset, type ButtonShape } from "./button.js";
interface ButtonLinkProps extends LinkProps {
    preset?: ButtonPreset;
    thin?: boolean;
    shape?: ButtonShape;
}
export declare function _ButtonLink({ children, className, preset, shape, thin, ...props }: ButtonLinkProps, ref: Ref<HTMLAnchorElement>): import("react/jsx-runtime").JSX.Element;
export declare const ButtonLink: import("react").ForwardRefExoticComponent<ButtonLinkProps & import("react").RefAttributes<HTMLAnchorElement>>;
export {};
