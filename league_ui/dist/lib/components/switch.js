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
var switch_exports = {};
__export(switch_exports, {
  Switch: () => Switch
});
module.exports = __toCommonJS(switch_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cva = require("cva");
var import_react_aria_components = require("react-aria-components");
var import_switch = __toESM(require("./switch.module"));
const track = (0, import_cva.cva)({
  base: import_switch.default.track,
  variants: {
    isHovered: {
      true: import_switch.default.hover
    },
    isPressed: {
      true: import_switch.default.press
    },
    isDisabled: {
      true: import_switch.default.disabled
    },
    isSelected: {
      true: import_switch.default.selected
    }
  }
});
const knob = (0, import_cva.cva)({
  base: import_switch.default.knob,
  variants: {
    isSelected: {
      true: import_switch.default.selected
    },
    isHovered: {
      true: import_switch.default.hover
    },
    isPressed: {
      true: import_switch.default.press
    },
    isDisabled: {
      true: import_switch.default.disabled
    }
  }
});
function Switch({
  className,
  placeholder,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_aria_components.Switch,
    {
      ...props,
      className: "group inline-flex items-center gap-2 p-1 px-1.5 text-sm font-semibold text-black",
      children: (values) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: track(values), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: knob(values) }) }),
        typeof children === "function" ? children(values) : children
      ] })
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Switch
});

//# sourceMappingURL=switch.js.map