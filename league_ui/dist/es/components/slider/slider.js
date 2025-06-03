import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { cva, cx } from "cva";
import {
  Slider as AriaSlider,
  SliderOutput as AriaSliderOutput,
  SliderThumb as AriaSliderThumb,
  SliderTrack as AriaSliderTrack
} from "react-aria-components";
import { resolveClassName } from "../../utilities/resolve-class-name.js";
import textClasses from "../typography/text.module";
import classes from "./slider.module";
const sliderTrackForeground = cva({
  base: classes.foreground,
  variants: {
    isDisabled: {
      true: classes.disabled
    }
  }
});
const sliderThumb = cva({
  base: classes.thumb,
  variants: {
    isThumbDragging: {
      true: classes.thumbDragging
    },
    isOtherThumbDragging: {
      true: classes.otherThumbDragging
    },
    isDisabled: {
      true: classes.disabled
    },
    isHovered: {
      true: classes.hovered
    }
  }
});
function Slider({
  children,
  className,
  sliderThumbProps = {},
  sliderTrackProps = {},
  sliderTrackBackgroundClassName,
  sliderTrackForegroundClassName,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AriaSlider,
    {
      ...props,
      className: (values) => resolveClassName(className, values),
      children: (values) => /* @__PURE__ */ jsxs(Fragment, { children: [
        typeof children === "function" ? children(values) : children,
        /* @__PURE__ */ jsx(
          AriaSliderTrack,
          {
            ...sliderTrackProps,
            className: (sliderTrackRenderProps) => cx(
              classes.track,
              resolveClassName(
                sliderTrackProps.className,
                sliderTrackRenderProps
              )
            ),
            children: (values2) => {
              const left = values2.state.values.length === 1 ? 0 : values2.state.getThumbPercent(0) * 100;
              const width = values2.state.values.length === 1 ? values2.state.getThumbPercent(0) * 100 : (values2.state.getThumbPercent(1) - values2.state.getThumbPercent(0)) * 100;
              return /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cx(
                      classes.background,
                      resolveClassName(sliderTrackBackgroundClassName, values2)
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: sliderTrackForeground({
                      ...values2.state,
                      className: resolveClassName(
                        sliderTrackForegroundClassName,
                        values2
                      )
                    }),
                    style: { left: `${left}%`, width: `${width}%` }
                  }
                ),
                values2.state.values.map((_, i) => {
                  const zIndex = values2.state.getThumbPercent(i === 1 ? 0 : 1) === (i === 1 ? 0 : 1) ? 2 : void 0;
                  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
                    AriaSliderThumb,
                    {
                      index: i,
                      ...sliderThumbProps,
                      className: (sliderThumbRenderProps) => {
                        sliderThumbRenderProps.isDragging;
                        return sliderThumb({
                          isDisabled: sliderThumbRenderProps.isDisabled,
                          isThumbDragging: sliderThumbRenderProps.state.isThumbDragging(i),
                          isOtherThumbDragging: sliderThumbRenderProps.state.isThumbDragging(
                            i === 1 ? 0 : 1
                          ),
                          className: resolveClassName(
                            sliderThumbProps.className,
                            sliderThumbRenderProps
                          )
                        });
                      },
                      style: {
                        zIndex
                      }
                    },
                    i
                  ) });
                })
              ] });
            }
          }
        )
      ] })
    }
  );
}
function SliderOutput(props) {
  return /* @__PURE__ */ jsx(
    AriaSliderOutput,
    {
      className: (values) => cx(
        textClasses.text,
        textClasses.sm,
        textClasses.grey100,
        resolveClassName(props.className, values)
      ),
      children: (sliderRenderProps) => sliderRenderProps.state.values.map((_, i) => sliderRenderProps.state.getThumbValueLabel(i)).join(" – "),
      ...props
    }
  );
}
export {
  Slider,
  SliderOutput
};

//# sourceMappingURL=slider.js.map