import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { cva } from "cva";
import {
  Input as AriaInput,
  NumberField as AriaNumberField,
  Button,
  Group
} from "react-aria-components";
import { resolveClassName } from "../utilities/resolve-class-name.js";
import classes from "./number-field.module";
const numberFieldGroup = cva({
  base: classes.group,
  variants: {
    preset: {
      normal: classes.normal,
      dimmed: classes.dimmed
    },
    isDisabled: {
      true: classes.disabled
    },
    isFocusWithin: {
      true: classes.focusWithin
    }
  }
});
const numberFieldInput = cva({
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
const numberFieldButton = cva({
  base: classes.button,
  variants: {
    isDisabled: {
      true: classes.disabled
    }
  }
});
function NumberField({
  inputProps = {},
  groupProps = {},
  children,
  preset = "normal",
  ...props
}) {
  return /* @__PURE__ */ jsx(AriaNumberField, { ...props, children: (values) => /* @__PURE__ */ jsxs(Fragment, { children: [
    typeof children === "function" ? children(values) : children,
    /* @__PURE__ */ jsxs(
      Group,
      {
        ...groupProps,
        className: (values2) => {
          return numberFieldGroup({
            className: resolveClassName(groupProps.className, values2),
            preset,
            ...values2
          });
        },
        children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              className: (values2) => numberFieldButton(values2),
              slot: "decrement",
              children: "-"
            }
          ),
          /* @__PURE__ */ jsx(
            AriaInput,
            {
              ...inputProps,
              className: (values2) => {
                return numberFieldInput({
                  className: resolveClassName(inputProps.className, values2),
                  ...values2
                });
              }
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              className: (values2) => numberFieldButton(values2),
              slot: "increment",
              children: "+"
            }
          )
        ]
      }
    )
  ] }) });
}
export {
  NumberField
};

//# sourceMappingURL=number-field.js.map