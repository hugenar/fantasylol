import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import {
  Input as AriaInput,
  TextField as AriaTextField
} from "react-aria-components";
import { resolveClassName } from "../utilities/resolve-class-name.js";
import { cva } from "cva";
import classes from "./text-field.module";
const textField = cva({
  base: classes.textField,
  variants: {
    isDisabled: {
      true: classes.disabled
    },
    isFocused: {
      true: classes.focus
    }
  }
});
function TextField({
  inputProps = {},
  borderProps = {},
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(AriaTextField, { ...props, children: (values) => /* @__PURE__ */ jsxs(Fragment, { children: [
    typeof children === "function" ? children(values) : children,
    /* @__PURE__ */ jsx(
      AriaInput,
      {
        type: "text",
        ...inputProps,
        className: (values2) => textField({
          ...values2,
          className: resolveClassName(inputProps?.className, values2)
        })
      }
    )
  ] }) });
}
export {
  TextField,
  textField
};

//# sourceMappingURL=text-field.js.map