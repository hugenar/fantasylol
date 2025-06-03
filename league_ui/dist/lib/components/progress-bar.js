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
var progress_bar_exports = {};
__export(progress_bar_exports, {
  ProgressBar: () => ProgressBar
});
module.exports = __toCommonJS(progress_bar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cva = require("cva");
var import_react_aria_components = require("react-aria-components");
var import_progress_bar = __toESM(require("./progress-bar.module"));
function ProgressBar({
  className,
  label,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_aria_components.ProgressBar, { className: (0, import_cva.cx)(import_progress_bar.default.wrapper, className), ...props, children: ({ percentage, valueText }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: import_progress_bar.default.labelWrapper, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_aria_components.Label, { children: label ?? "Loading" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: valueText })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: import_progress_bar.default.progressBar, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: import_progress_bar.default.fill, style: { width: `${percentage}%` } }) })
  ] }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ProgressBar
});

//# sourceMappingURL=progress-bar.js.map