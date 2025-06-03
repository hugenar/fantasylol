import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { cx } from "cva";
import {
  ProgressBar as AriaProgressBar,
  Label
} from "react-aria-components";
import classes from "./progress-bar.module";
function ProgressBar({
  className,
  label,
  ...props
}) {
  return /* @__PURE__ */ jsx(AriaProgressBar, { className: cx(classes.wrapper, className), ...props, children: ({ percentage, valueText }) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: classes.labelWrapper, children: [
      /* @__PURE__ */ jsx(Label, { children: label ?? "Loading" }),
      /* @__PURE__ */ jsx("span", { children: valueText })
    ] }),
    /* @__PURE__ */ jsx("div", { className: classes.progressBar, children: /* @__PURE__ */ jsx("div", { className: classes.fill, style: { width: `${percentage}%` } }) })
  ] }) });
}
export {
  ProgressBar
};

//# sourceMappingURL=progress-bar.js.map