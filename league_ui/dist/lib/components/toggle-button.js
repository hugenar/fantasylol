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
var toggle_button_exports = {};
__export(toggle_button_exports, {
  ToggleButton: () => ToggleButton
});
module.exports = __toCommonJS(toggle_button_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cva = require("cva");
var import_react_aria_components = require("react-aria-components");
var import_resolve_class_name = require("../utilities/resolve-class-name.js");
var import_button = __toESM(require("./button.module"));
const button = (0, import_cva.cva)({
  base: import_button.default.button,
  variants: {
    preset: {
      secondary: import_button.default.secondary,
      hextech: import_button.default.hextech,
      dimmed: import_button.default.dimmed
    },
    isHovered: {
      true: import_button.default.hover
    },
    isPressed: {
      true: import_button.default.press
    },
    isDisabled: {
      true: import_button.default.disabled
    },
    isFocusVisible: {
      true: import_button.default.focusVisible
    },
    shape: {
      round: import_button.default.round,
      square: import_button.default.square,
      normal: import_button.default.normal
    },
    thin: {
      true: import_button.default.thin
    },
    isSelected: {
      true: import_button.default.selected
    }
  }
});
function ToggleButton({
  children,
  className,
  preset = "secondary",
  shape = "normal",
  thin = preset === "dimmed",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_aria_components.ToggleButton,
    {
      ...props,
      className: (values) => button({
        ...values,
        preset,
        shape,
        thin,
        className: (0, import_resolve_class_name.resolveClassName)(className, values)
      }),
      children
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ToggleButton
});

//# sourceMappingURL=toggle-button.js.map