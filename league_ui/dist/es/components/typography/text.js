import { createElement } from "react";
import {
  Label as AriaLabel
} from "react-aria-components";
import { cva } from "cva";
import classes from "./text.module";
const presetElements = {
  sm: "p",
  base: "p",
  md: "p",
  lg: "p",
  largeNumber: "span",
  stat: "span"
};
const text = cva({
  base: classes.text,
  variants: {
    color: {
      grey100: classes.grey100,
      grey150: classes.grey150,
      gold100: classes.gold100
    },
    preset: {
      sm: classes.sm,
      base: classes.base,
      md: classes.md,
      lg: classes.lg,
      label: classes.label,
      largeNumber: classes.largeNumber,
      stat: classes.stat
    }
  }
});
function Text({
  as = "p",
  preset = "base",
  color = "grey100",
  className,
  ...rest
}) {
  const elementType = as ?? presetElements[preset];
  return createElement(elementType, {
    ...rest,
    className: text({ preset, color, className })
  });
}
function Label({
  preset = "sm",
  color = "grey100",
  className,
  ...rest
}) {
  return createElement(AriaLabel, {
    ...rest,
    className: text({ preset, color, className })
  });
}
export {
  Label,
  Text
};

//# sourceMappingURL=text.js.map