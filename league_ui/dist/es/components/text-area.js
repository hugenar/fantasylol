import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import {
  TextArea as AriaTextArea,
  TextField as AriaTextField
} from "react-aria-components";
import { resolveClassName } from "../utilities/resolve-class-name.js";
import { textField } from "./text-field.js";
function TextArea({
  textAreaProps = {},
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(AriaTextField, { ...props, children: (values) => /* @__PURE__ */ jsxs(Fragment, { children: [
    typeof children === "function" ? children(values) : children,
    /* @__PURE__ */ jsx(
      AriaTextArea,
      {
        ...textAreaProps,
        className: (values2) => textField({
          ...values2,
          className: resolveClassName(textAreaProps?.className, values2)
        })
      }
    )
  ] }) });
}
export {
  TextArea
};

//# sourceMappingURL=text-area.js.map