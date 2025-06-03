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
var spinner_exports = {};
__export(spinner_exports, {
  Spinner: () => Spinner
});
module.exports = __toCommonJS(spinner_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cva = require("cva");
var import_spinner = __toESM(require("./spinner.module"));
var import_spinner_a69432f7 = __toESM(require("../../assets/spinner.a69432f7.png"));
function Spinner({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "img",
    {
      role: "status",
      "aria-live": "polite",
      "aria-label": "loading",
      src: import_spinner_a69432f7.default,
      className: (0, import_cva.cx)(import_spinner.default.spinner, className)
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Spinner
});

//# sourceMappingURL=spinner.js.map