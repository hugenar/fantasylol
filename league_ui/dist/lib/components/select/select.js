"use strict";
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
var select_exports = {};
__export(select_exports, {
  Item: () => Item,
  Select: () => Select
});
module.exports = __toCommonJS(select_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cva = require("cva");
var import_react_aria_components = require("react-aria-components");
var import_resolve_class_name = require("../../utilities/resolve-class-name.js");
var import_select = __toESM(require("./select.module"));
const selectButtonBorder = (0, import_cva.cva)({
  base: import_select.default.button,
  variants: {
    isHovered: { true: import_select.default.hover },
    isPressed: { true: import_select.default.press },
    isOpen: { true: import_select.default.open },
    isDisabled: { true: import_select.default.disabled }
  }
});
function Select({
  description,
  errorMessage,
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_aria_components.Select,
    {
      ...props,
      className: (values) => (0, import_resolve_class_name.resolveClassName)(className, values),
      children: (values) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_react_aria_components.Button,
          {
            className: (buttonValues) => selectButtonBorder({ ...buttonValues, isOpen: values.isOpen }),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_aria_components.SelectValue, {})
          }
        ),
        description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_aria_components.Text, { slot: "description", children: description }),
        errorMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_aria_components.Text, { slot: "errorMessage", children: errorMessage }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_aria_components.Popover, { offset: 4, className: "w-[--trigger-width]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_aria_components.ListBox, { className: import_select.default.listBox, children }) })
      ] })
    }
  );
}
const item = (0, import_cva.cva)({
  base: import_select.default.item,
  variants: {
    isHovered: { true: import_select.default.hover },
    isPressed: { true: import_select.default.press },
    isSelected: { true: import_select.default.selected }
  }
});
function Item({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_aria_components.ListBoxItem,
    {
      ...props,
      className: (values) => {
        return item({
          ...values,
          className: (0, import_resolve_class_name.resolveClassName)(className, values)
        });
      }
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Item,
  Select
});

//# sourceMappingURL=select.js.map