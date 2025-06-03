"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { cva, cx } from "cva";
import {
  Tab as AriaTab,
  TabList as AriaTabList,
  TabPanel as AriaTabPanel,
  Tabs as AriaTabs
} from "react-aria-components";
import { resolveClassName } from "../utilities/resolve-class-name.js";
import classes from "./tabs.module";
const Tabs = AriaTabs;
function TabList({
  className,
  ...rest
}) {
  return /* @__PURE__ */ jsx(
    AriaTabList,
    {
      ...rest,
      className: (values) => cx(classes.list, resolveClassName(className, values))
    }
  );
}
const tab = cva({
  base: classes.tab,
  variants: {
    isSelected: {
      true: classes.selected
    },
    isHovered: {
      true: classes.hovered
    },
    isPressed: {
      true: classes.pressed
    },
    isDisabled: {
      true: classes.disabled
    },
    isFocusVisible: {
      true: classes.focusVisible
    }
  }
});
function Tab({ children, className, ...rest }) {
  return /* @__PURE__ */ jsx(
    AriaTab,
    {
      ...rest,
      className: (values) => tab({
        ...values,
        className: resolveClassName(className, values)
      }),
      children: (values) => /* @__PURE__ */ jsxs(Fragment, { children: [
        typeof children === "function" ? children(values) : children,
        values.isSelected && /* @__PURE__ */ jsx("div", { className: classes.indicator })
      ] })
    }
  );
}
function TabPanel({ ...rest }) {
  return /* @__PURE__ */ jsx(AriaTabPanel, { ...rest });
}
export {
  Tab,
  TabList,
  TabPanel,
  Tabs
};

//# sourceMappingURL=tabs.js.map