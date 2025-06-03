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
var tooltip_exports = {};
__export(tooltip_exports, {
  Tooltip: () => Tooltip,
  TooltipTrigger: () => import_react_aria_components2.TooltipTrigger
});
module.exports = __toCommonJS(tooltip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cva = require("cva");
var import_react_aria_components = require("react-aria-components");
var import_resolve_class_name = require("../utilities/resolve-class-name.js");
var import_tooltip = __toESM(require("./tooltip.module"));
var import_react_aria_components2 = require("react-aria-components");
const tooltipBorder = (0, import_cva.cva)({
  base: import_tooltip.default.tooltip,
  variants: {
    placement: {
      bottom: import_tooltip.default.bottom,
      top: import_tooltip.default.top,
      left: import_tooltip.default.left,
      right: import_tooltip.default.right,
      center: ""
    }
  }
});
const tooltipArrowBorder = (0, import_cva.cva)({
  base: import_tooltip.default.arrowBorder,
  variants: {
    placement: {
      top: import_tooltip.default.top,
      bottom: import_tooltip.default.bottom,
      left: import_tooltip.default.left,
      right: import_tooltip.default.right,
      center: ""
    }
  }
});
const tooltipArrow = (0, import_cva.cva)({
  base: import_tooltip.default.arrow,
  variants: {
    placement: {
      top: import_tooltip.default.top,
      bottom: import_tooltip.default.bottom,
      left: import_tooltip.default.left,
      right: import_tooltip.default.right,
      center: ""
    }
  }
});
function Tooltip({ children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_aria_components.Tooltip,
    {
      ...props,
      className: (values) => tooltipBorder({
        ...values,
        className: (0, import_resolve_class_name.resolveClassName)(props?.className, values)
      }),
      children: (values) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_aria_components.OverlayArrow, { className: "translate-y-1 transform", children: (values2) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 12 12", className: tooltipArrowBorder(values2), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 0,L6 6,L12 0" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 12 12", className: tooltipArrow(values2), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 0,L6 6,L12 0" }) })
        ] }) }),
        typeof children === "function" ? children(values) : children
      ] })
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Tooltip,
  TooltipTrigger
});

//# sourceMappingURL=tooltip.js.map