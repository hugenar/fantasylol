"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var slider_exports = {};
__export(slider_exports, {
  Slider: () => Slider,
  SliderOutput: () => SliderOutput
});
module.exports = __toCommonJS(slider_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cva = require("cva");
var import_react_aria_components = require("react-aria-components");
var import_resolve_class_name = require("../../utilities/resolve-class-name.js");
var import_text = __toESM(require("../typography/text.module"));
var import_slider = __toESM(require("./slider.module"));
const sliderTrackForeground = (0, import_cva.cva)({
  base: import_slider.default.foreground,
  variants: {
    isDisabled: {
      true: import_slider.default.disabled
    }
  }
});
const sliderThumb = (0, import_cva.cva)({
  base: import_slider.default.thumb,
  variants: {
    isThumbDragging: {
      true: import_slider.default.thumbDragging
    },
    isOtherThumbDragging: {
      true: import_slider.default.otherThumbDragging
    },
    isDisabled: {
      true: import_slider.default.disabled
    },
    isHovered: {
      true: import_slider.default.hovered
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_aria_components.Slider,
    {
      ...props,
      className: (values) => (0, import_resolve_class_name.resolveClassName)(className, values),
      children: (values) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        typeof children === "function" ? children(values) : children,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_react_aria_components.SliderTrack,
          {
            ...sliderTrackProps,
            className: (sliderTrackRenderProps) => (0, import_cva.cx)(
              import_slider.default.track,
              (0, import_resolve_class_name.resolveClassName)(
                sliderTrackProps.className,
                sliderTrackRenderProps
              )
            ),
            children: (values2) => {
              const left = values2.state.values.length === 1 ? 0 : values2.state.getThumbPercent(0) * 100;
              const width = values2.state.values.length === 1 ? values2.state.getThumbPercent(0) * 100 : (values2.state.getThumbPercent(1) - values2.state.getThumbPercent(0)) * 100;
              return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "div",
                  {
                    className: (0, import_cva.cx)(
                      import_slider.default.background,
                      (0, import_resolve_class_name.resolveClassName)(sliderTrackBackgroundClassName, values2)
                    )
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "div",
                  {
                    className: sliderTrackForeground({
                      ...values2.state,
                      className: (0, import_resolve_class_name.resolveClassName)(
                        sliderTrackForegroundClassName,
                        values2
                      )
                    }),
                    style: { left: `${left}%`, width: `${width}%` }
                  }
                ),
                values2.state.values.map((_, i) => {
                  const zIndex = values2.state.getThumbPercent(i === 1 ? 0 : 1) === (i === 1 ? 0 : 1) ? 2 : void 0;
                  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    import_react_aria_components.SliderThumb,
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
                          className: (0, import_resolve_class_name.resolveClassName)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_aria_components.SliderOutput,
    {
      className: (values) => (0, import_cva.cx)(
        import_text.default.text,
        import_text.default.sm,
        import_text.default.grey100,
        (0, import_resolve_class_name.resolveClassName)(props.className, values)
      ),
      children: (sliderRenderProps) => sliderRenderProps.state.values.map((_, i) => sliderRenderProps.state.getThumbValueLabel(i)).join(" – "),
      ...props
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Slider,
  SliderOutput
});

//# sourceMappingURL=slider.js.map