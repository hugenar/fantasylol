import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { cva } from "cva";
import {
  Checkbox as AriaCheckbox
} from "react-aria-components";
import { resolveClassName } from "../../utilities/resolve-class-name.js";
import classes from "./checkbox.module";
import imageCheckedHover from "../../assets/checked-hover.d13cb1b3.png";
import imageChecked from "../../assets/checked.3258b858.png";
import imageIndeterminateHover from "../../assets/indeterminate-hover.68fcbcda.png";
import imageIndeterminate from "../../assets/indeterminate.90d6dc3e.png";
import imageUncheckedHover from "../../assets/unchecked-hover.c8e5f2d0.png";
import imageUnchecked from "../../assets/unchecked.cc033abe.png";
const checkbox = cva({
  base: classes.checkbox,
  variants: {
    isHovered: {
      true: classes.hover
    },
    isDisabled: {
      true: classes.disabled
    }
  }
});
function Checkbox({ children, className, ...props }) {
  return /* @__PURE__ */ jsx(
    AriaCheckbox,
    {
      className: (values) => {
        return checkbox({
          className: resolveClassName(className, values),
          ...values
        });
      },
      ...props,
      children: (values) => /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "h-3.5 w-3.5",
            "aria-hidden": "true",
            alt: "",
            src: values.isHovered ? values.isIndeterminate ? imageIndeterminateHover : values.isSelected ? imageCheckedHover : imageUncheckedHover : values.isIndeterminate ? imageIndeterminate : values.isSelected ? imageChecked : imageUnchecked
          }
        ),
        typeof children === "function" ? children(values) : children
      ] })
    }
  );
}
export {
  Checkbox
};

//# sourceMappingURL=checkbox.js.map