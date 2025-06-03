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
var number_field_exports = {};
__export(number_field_exports, {
  NumberField: () => NumberField
});
module.exports = __toCommonJS(number_field_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cva = require("cva");
var import_react_aria_components = require("react-aria-components");
var import_resolve_class_name = require("../utilities/resolve-class-name.js");
var import_number_field = __toESM(require("./number-field.module"));
const numberFieldGroup = (0, import_cva.cva)({
  base: import_number_field.default.group,
  variants: {
    preset: {
      normal: import_number_field.default.normal,
      dimmed: import_number_field.default.dimmed
    },
    isDisabled: {
      true: import_number_field.default.disabled
    },
    isFocusWithin: {
      true: import_number_field.default.focusWithin
    }
  }
});
const numberFieldInput = (0, import_cva.cva)({
  base: import_number_field.default.input,
  variants: {
    isDisabled: {
      true: import_number_field.default.disabled
    },
    isFocused: {
      true: import_number_field.default.focus
    }
  }
});
const numberFieldButton = (0, import_cva.cva)({
  base: import_number_field.default.button,
  variants: {
    isDisabled: {
      true: import_number_field.default.disabled
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_aria_components.NumberField, { ...props, children: (values) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    typeof children === "function" ? children(values) : children,
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_react_aria_components.Group,
      {
        ...groupProps,
        className: (values2) => {
          return numberFieldGroup({
            className: (0, import_resolve_class_name.resolveClassName)(groupProps.className, values2),
            preset,
            ...values2
          });
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_react_aria_components.Button,
            {
              className: (values2) => numberFieldButton(values2),
              slot: "decrement",
              children: "-"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_react_aria_components.Input,
            {
              ...inputProps,
              className: (values2) => {
                return numberFieldInput({
                  className: (0, import_resolve_class_name.resolveClassName)(inputProps.className, values2),
                  ...values2
                });
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_react_aria_components.Button,
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NumberField
});

//# sourceMappingURL=number-field.js.map