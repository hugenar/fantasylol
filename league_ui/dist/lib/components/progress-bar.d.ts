import { type ProgressBarProps as AriaProgressBarProps } from "react-aria-components";
interface ProgressBarProps extends Omit<AriaProgressBarProps, "children"> {
    label?: string;
}
export declare function ProgressBar({ className, label, ...props }: ProgressBarProps): JSX.Element;
export {};
