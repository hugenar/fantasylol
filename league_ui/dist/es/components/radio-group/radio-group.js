import { jsx } from "react/jsx-runtime";
import { cva, cx } from "cva";
import {
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup
} from "react-aria-components";
import { resolveClassName } from "../../utilities/resolve-class-name.js";
import classes from "./radio-group.module";
function RadioGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    AriaRadioGroup,
    {
      ...props,
      className: (values) => {
        return cx(classes.radioGroup, resolveClassName(className, values));
      }
    }
  );
}
const radio = cva({
  base: classes.radio,
  variants: {
    isDisabled: { true: classes.disabled },
    isHovered: { true: classes.hovered },
    isSelected: { true: classes.selected },
    isPressed: { true: classes.pressed }
  }
});
function Radio({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    AriaRadio,
    {
      ...props,
      className: (values) => radio({
        ...values,
        className: resolveClassName(className, values)
      })
    }
  );
}
export {
  Radio,
  RadioGroup
};

//# sourceMappingURL=radio-group.js.map