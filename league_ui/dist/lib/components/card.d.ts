import type { ComponentProps } from "react";
export interface CardProps extends ComponentProps<"div"> {
    radius?: string;
    borderWidth?: string;
}
export declare function Card({ className, style, radius, borderWidth, ...props }: CardProps): import("react/jsx-runtime").JSX.Element;
