import { jsx, jsxs } from "react/jsx-runtime";
import { cva } from "cva";
import classes from "./divider.module";
const divider = cva({
  base: classes.divider,
  variants: {
    preset: {
      left: classes.left,
      center: classes.center,
      right: classes.right
    }
  }
});
function Divider({ preset = "center", hrProps, ...rest }) {
  return /* @__PURE__ */ jsxs("div", { className: classes.wrapper, ...rest, children: [
    preset === "right" && /* @__PURE__ */ jsx("div", { className: classes.block }),
    /* @__PURE__ */ jsx(
      "hr",
      {
        ...hrProps,
        className: divider({ preset, className: hrProps?.className })
      }
    ),
    preset === "left" && /* @__PURE__ */ jsx("div", { className: classes.block })
  ] });
}
export {
  Divider
};

//# sourceMappingURL=divider.js.map