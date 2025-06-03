"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var text_area_exports = {};
__export(text_area_exports, {
  TextArea: () => TextArea
});
module.exports = __toCommonJS(text_area_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react_aria_components = require("react-aria-components");
var import_resolve_class_name = require("../utilities/resolve-class-name.js");
var import_text_field = require("./text-field.js");
function TextArea({
  textAreaProps = {},
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_aria_components.TextField, { ...props, children: (values) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    typeof children === "function" ? children(values) : children,
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_react_aria_components.TextArea,
      {
        ...textAreaProps,
        className: (values2) => (0, import_text_field.textField)({
          ...values2,
          className: (0, import_resolve_class_name.resolveClassName)(textAreaProps?.className, values2)
        })
      }
    )
  ] }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TextArea
});

//# sourceMappingURL=text-area.js.map