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
var checkbox_exports = {};
__export(checkbox_exports, {
  Checkbox: () => Checkbox
});
module.exports = __toCommonJS(checkbox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cva = require("cva");
var import_react_aria_components = require("react-aria-components");
var import_resolve_class_name = require("../../utilities/resolve-class-name.js");
var import_checkbox = __toESM(require("./checkbox.module"));
var import_checked_hover_d13cb1b3 = __toESM(require("../../assets/checked-hover.d13cb1b3.png"));
var import_checked_3258b858 = __toESM(require("../../assets/checked.3258b858.png"));
var import_indeterminate_hover_68fcbcda = __toESM(require("../../assets/indeterminate-hover.68fcbcda.png"));
var import_indeterminate_90d6dc3e = __toESM(require("../../assets/indeterminate.90d6dc3e.png"));
var import_unchecked_hover_c8e5f2d0 = __toESM(require("../../assets/unchecked-hover.c8e5f2d0.png"));
var import_unchecked_cc033abe = __toESM(require("../../assets/unchecked.cc033abe.png"));
const checkbox = (0, import_cva.cva)({
  base: import_checkbox.default.checkbox,
  variants: {
    isHovered: {
      true: import_checkbox.default.hover
    },
    isDisabled: {
      true: import_checkbox.default.disabled
    }
  }
});
function Checkbox({ children, className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_aria_components.Checkbox,
    {
      className: (values) => {
        return checkbox({
          className: (0, import_resolve_class_name.resolveClassName)(className, values),
          ...values
        });
      },
      ...props,
      children: (values) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "img",
          {
            className: "h-3.5 w-3.5",
            "aria-hidden": "true",
            alt: "",
            src: values.isHovered ? values.isIndeterminate ? import_indeterminate_hover_68fcbcda.default : values.isSelected ? import_checked_hover_d13cb1b3.default : import_unchecked_hover_c8e5f2d0.default : values.isIndeterminate ? import_indeterminate_90d6dc3e.default : values.isSelected ? import_checked_3258b858.default : import_unchecked_cc033abe.default
          }
        ),
        typeof children === "function" ? children(values) : children
      ] })
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Checkbox
});

//# sourceMappingURL=checkbox.js.map