import type { SliderProps as AriaSliderProps, SliderOutputProps, SliderThumbProps, SliderTrackProps, SliderTrackRenderProps } from "react-aria-components";
export declare function Slider<T extends number | number[]>({ children, className, sliderThumbProps, sliderTrackProps, sliderTrackBackgroundClassName, sliderTrackForegroundClassName, ...props }: AriaSliderProps<T> & {
    sliderTrackProps?: SliderTrackProps;
    sliderThumbProps?: SliderThumbProps;
    sliderTrackBackgroundClassName?: string | ((values: SliderTrackRenderProps) => string);
    sliderTrackForegroundClassName?: string | ((values: SliderTrackRenderProps) => string);
}): import("react/jsx-runtime").JSX.Element;
export declare function SliderOutput(props: SliderOutputProps): import("react/jsx-runtime").JSX.Element;
