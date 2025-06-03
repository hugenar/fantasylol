import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import {
  Button as AriaButton
} from "react-aria-components";
import { resolveClassName } from "../utilities/resolve-class-name.js";
import { cva } from "cva";
import classes from "./button.module";
const button = cva({
  base: classes.button,
  variants: {
    preset: {
      primary: classes.primary,
      secondary: classes.secondary,
      text: classes.text,
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
    isFocused: {
      true: ""
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
    }
  }
});
function _Button({
  children,
  className,
  preset = "secondary",
  shape = "normal",
  thin = preset === "dimmed",
  ...props
}, ref) {
  return /* @__PURE__ */ jsx(
    AriaButton,
    {
      ref,
      ...props,
      className: (values) => {
        return button({
          className: resolveClassName(className, values),
          preset,
          shape,
          thin,
          ...values
        });
      },
      children
    }
  );
}
const Button = forwardRef(_Button);
Button.displayName = "Button";
export {
  Button,
  _Button,
  button
};

//# sourceMappingURL=button.js.map