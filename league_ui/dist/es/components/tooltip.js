import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { cva } from "cva";
import { Tooltip as AriaTooltip, OverlayArrow } from "react-aria-components";
import { resolveClassName } from "../utilities/resolve-class-name.js";
import classes from "./tooltip.module";
const tooltipBorder = cva({
  base: classes.tooltip,
  variants: {
    placement: {
      bottom: classes.bottom,
      top: classes.top,
      left: classes.left,
      right: classes.right,
      center: ""
    }
  }
});
const tooltipArrowBorder = cva({
  base: classes.arrowBorder,
  variants: {
    placement: {
      top: classes.top,
      bottom: classes.bottom,
      left: classes.left,
      right: classes.right,
      center: ""
    }
  }
});
const tooltipArrow = cva({
  base: classes.arrow,
  variants: {
    placement: {
      top: classes.top,
      bottom: classes.bottom,
      left: classes.left,
      right: classes.right,
      center: ""
    }
  }
});
function Tooltip({ children, ...props }) {
  return /* @__PURE__ */ jsx(
    AriaTooltip,
    {
      ...props,
      className: (values) => tooltipBorder({
        ...values,
        className: resolveClassName(props?.className, values)
      }),
      children: (values) => /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(OverlayArrow, { className: "translate-y-1 transform", children: (values2) => /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("svg", { viewBox: "0 0 12 12", className: tooltipArrowBorder(values2), children: /* @__PURE__ */ jsx("path", { d: "M0 0,L6 6,L12 0" }) }),
          /* @__PURE__ */ jsx("svg", { viewBox: "0 0 12 12", className: tooltipArrow(values2), children: /* @__PURE__ */ jsx("path", { d: "M0 0,L6 6,L12 0" }) })
        ] }) }),
        typeof children === "function" ? children(values) : children
      ] })
    }
  );
}
import { TooltipTrigger } from "react-aria-components";
export {
  Tooltip,
  TooltipTrigger
};

//# sourceMappingURL=tooltip.js.map