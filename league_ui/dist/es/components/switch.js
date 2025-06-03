import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { cva } from "cva";
import { Switch as AriaSwitch } from "react-aria-components";
import classes from "./switch.module";
const track = cva({
  base: classes.track,
  variants: {
    isHovered: {
      true: classes.hover
    },
    isPressed: {
      true: classes.press
    },
    isDisabled: {
      true: classes.disabled
    },
    isSelected: {
      true: classes.selected
    }
  }
});
const knob = cva({
  base: classes.knob,
  variants: {
    isSelected: {
      true: classes.selected
    },
    isHovered: {
      true: classes.hover
    },
    isPressed: {
      true: classes.press
    },
    isDisabled: {
      true: classes.disabled
    }
  }
});
function Switch({
  className,
  placeholder,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AriaSwitch,
    {
      ...props,
      className: "group inline-flex items-center gap-2 p-1 px-1.5 text-sm font-semibold text-black",
      children: (values) => /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: track(values), children: /* @__PURE__ */ jsx("span", { className: knob(values) }) }),
        typeof children === "function" ? children(values) : children
      ] })
    }
  );
}
export {
  Switch
};

//# sourceMappingURL=switch.js.map