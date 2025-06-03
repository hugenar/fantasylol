import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { cva } from "cva";
import {
  Button as AriaButton,
  ListBox as AriaListBox,
  Popover as AriaPopover,
  Select as AriaSelect,
  SelectValue as AriaSelectValue,
  Text as AriaText,
  ListBoxItem
} from "react-aria-components";
import { resolveClassName } from "../../utilities/resolve-class-name.js";
import classes from "./select.module";
const selectButtonBorder = cva({
  base: classes.button,
  variants: {
    isHovered: { true: classes.hover },
    isPressed: { true: classes.press },
    isOpen: { true: classes.open },
    isDisabled: { true: classes.disabled }
  }
});
function Select({
  description,
  errorMessage,
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AriaSelect,
    {
      ...props,
      className: (values) => resolveClassName(className, values),
      children: (values) => /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          AriaButton,
          {
            className: (buttonValues) => selectButtonBorder({ ...buttonValues, isOpen: values.isOpen }),
            children: /* @__PURE__ */ jsx(AriaSelectValue, {})
          }
        ),
        description && /* @__PURE__ */ jsx(AriaText, { slot: "description", children: description }),
        errorMessage && /* @__PURE__ */ jsx(AriaText, { slot: "errorMessage", children: errorMessage }),
        /* @__PURE__ */ jsx(AriaPopover, { offset: 4, className: "w-[--trigger-width]", children: /* @__PURE__ */ jsx(AriaListBox, { className: classes.listBox, children }) })
      ] })
    }
  );
}
const item = cva({
  base: classes.item,
  variants: {
    isHovered: { true: classes.hover },
    isPressed: { true: classes.press },
    isSelected: { true: classes.selected }
  }
});
function Item({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    ListBoxItem,
    {
      ...props,
      className: (values) => {
        return item({
          ...values,
          className: resolveClassName(className, values)
        });
      }
    }
  );
}
export {
  Item,
  Select
};

//# sourceMappingURL=select.js.map