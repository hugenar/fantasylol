"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var tabs_exports = {};
__export(tabs_exports, {
  Tab: () => Tab,
  TabList: () => TabList,
  TabPanel: () => TabPanel,
  Tabs: () => Tabs
});
module.exports = __toCommonJS(tabs_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cva = require("cva");
var import_react_aria_components = require("react-aria-components");
var import_resolve_class_name = require("../utilities/resolve-class-name.js");
var import_tabs = __toESM(require("./tabs.module"));
const Tabs = import_react_aria_components.Tabs;
function TabList({
  className,
  ...rest
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_aria_components.TabList,
    {
      ...rest,
      className: (values) => (0, import_cva.cx)(import_tabs.default.list, (0, import_resolve_class_name.resolveClassName)(className, values))
    }
  );
}
const tab = (0, import_cva.cva)({
  base: import_tabs.default.tab,
  variants: {
    isSelected: {
      true: import_tabs.default.selected
    },
    isHovered: {
      true: import_tabs.default.hovered
    },
    isPressed: {
      true: import_tabs.default.pressed
    },
    isDisabled: {
      true: import_tabs.default.disabled
    },
    isFocusVisible: {
      true: import_tabs.default.focusVisible
    }
  }
});
function Tab({ children, className, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_aria_components.Tab,
    {
      ...rest,
      className: (values) => tab({
        ...values,
        className: (0, import_resolve_class_name.resolveClassName)(className, values)
      }),
      children: (values) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        typeof children === "function" ? children(values) : children,
        values.isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: import_tabs.default.indicator })
      ] })
    }
  );
}
function TabPanel({ ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_aria_components.TabPanel, { ...rest });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Tab,
  TabList,
  TabPanel,
  Tabs
});

//# sourceMappingURL=tabs.js.map