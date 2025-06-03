import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { cva, cx } from "cva";
import {
  Button as AriaButton,
  Input as AriaInput,
  SearchField as AriaSearchField
} from "react-aria-components";
import { resolveClassName } from "../../utilities/resolve-class-name.js";
import classes from "./search-field.module";
const searchFieldInput = cva({
  base: classes.input,
  variants: {
    isDisabled: {
      true: classes.disabled
    },
    isFocused: {
      true: classes.focus
    }
  }
});
const searchFieldButton = cva({
  base: classes.button,
  variants: {
    isHovered: { true: classes.hover },
    isPressed: { true: classes.press },
    isDisabled: { true: classes.disabled },
    isEmpty: { true: classes.empty }
  }
});
function SearchField({
  inputProps = {},
  borderProps = {},
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(AriaSearchField, { ...props, className: cx(classes.searchField, className), children: (values) => /* @__PURE__ */ jsxs(Fragment, { children: [
    typeof children === "function" ? children(values) : children,
    /* @__PURE__ */ jsx(
      AriaInput,
      {
        ...inputProps,
        className: (values2) => searchFieldInput({
          ...values2,
          className: resolveClassName(inputProps.className, values2)
        }),
        type: "text"
      }
    ),
    /* @__PURE__ */ jsx(
      AriaButton,
      {
        className: (buttonValues) => searchFieldButton({
          ...buttonValues,
          isDisabled: values.isDisabled,
          isEmpty: values.isEmpty
        }),
        children: "✕"
      }
    )
  ] }) });
}
export {
  SearchField
};

//# sourceMappingURL=search-field.js.map