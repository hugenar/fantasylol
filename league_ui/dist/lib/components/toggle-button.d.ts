import { type ToggleButtonProps as AriaToggleButtonProps } from "react-aria-components";
export type ToggleButtonShape = "round" | "square" | "normal";
export type ToggleButtonPreset = "secondary" | "hextech" | "dimmed";
interface ToggleButtonProps extends AriaToggleButtonProps {
    preset?: ToggleButtonPreset;
    thin?: boolean;
    shape?: ToggleButtonShape;
}
export declare function ToggleButton({ children, className, preset, shape, thin, ...props }: ToggleButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
