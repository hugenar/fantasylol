interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    preset?: "left" | "center" | "right";
    hrProps?: React.HTMLAttributes<HTMLHRElement>;
}
export declare function Divider({ preset, hrProps, ...rest }: DividerProps): import("react/jsx-runtime").JSX.Element;
export {};
