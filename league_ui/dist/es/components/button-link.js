import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Link as AriaButton } from "react-aria-components";
import { resolveClassName } from "../utilities/resolve-class-name.js";
import { button } from "./button.js";
function _ButtonLink({
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
const ButtonLink = forwardRef(_ButtonLink);
ButtonLink.displayName = "ButtonLink";
export {
  ButtonLink,
  _ButtonLink
};

//# sourceMappingURL=button-link.js.map