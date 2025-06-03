import { type LabelProps as AriaLabelProps } from "react-aria-components";
export type TextColor = "grey100" | "grey150" | "gold100";
export type TextElement = "p" | "span" | "div";
export type TextPreset = "sm" | "base" | "md" | "lg" | "largeNumber" | "stat";
interface TextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    preset?: TextPreset;
    color?: TextColor;
    as?: TextElement;
}
export declare function Text({ as, preset, color, className, ...rest }: TextProps): JSX.Element;
interface LabelProps extends AriaLabelProps {
    preset?: TextPreset | "label";
    color?: TextColor;
    as?: TextElement;
}
export declare function Label({ preset, color, className, ...rest }: LabelProps): JSX.Element;
export {};
