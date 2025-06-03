export type HeadingColor = "gold100" | "gold200" | "gold400" | "grey100";
export type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5";
interface HeadingProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    preset?: HeadingElement;
    color?: HeadingColor;
    as?: HeadingElement | "span";
}
export declare const heading: (props?: ({
    color?: "grey100" | "gold100" | "gold200" | "gold400" | undefined;
    preset?: "h1" | "h2" | "h3" | "h4" | "h5" | undefined;
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
export declare function Heading({ as, preset, color, className, ...rest }: HeadingProps): JSX.Element;
export {};
