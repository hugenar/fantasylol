import { jsx } from "react/jsx-runtime";
import { cva } from "cva";
import {
  ToggleButton as AriaToggleButton
} from "react-aria-components";
import { resolveClassName } from "../utilities/resolve-class-name.js";
import classes from "./button.module";
const button = cva({
  base: classes.button,
  variants: {
    preset: {
      secondary: classes.secondary,
      hextech: classes.hextech,
      dimmed: classes.dimmed
    },
    isHovered: {
      true: classes.hover
    },
    isPressed: {
      true: classes.press
    },
    isDisabled: {
      true: classes.disabled
    },
    isFocusVisible: {
      true: classes.focusVisible
    },
    shape: {
      round: classes.round,
      square: classes.square,
      normal: classes.normal
    },
    thin: {
      true: classes.thin
    },
    isSelected: {
      true: classes.selected
    }
  }
});
function ToggleButton({
  children,
  className,
  preset = "secondary",
  shape = "normal",
  thin = preset === "dimmed",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AriaToggleButton,
    {
      ...props,
      className: (values) => button({
        ...values,
        preset,
        shape,
        thin,
        className: resolveClassName(className, values)
      }),
      children
    }
  );
}
export {
  ToggleButton
};

//# sourceMappingURL=toggle-button.js.map