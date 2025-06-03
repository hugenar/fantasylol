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
var text_exports = {};
__export(text_exports, {
  Label: () => Label,
  Text: () => Text
});
module.exports = __toCommonJS(text_exports);
var import_react = require("react");
var import_react_aria_components = require("react-aria-components");
var import_cva = require("cva");
var import_text = __toESM(require("./text.module"));
const presetElements = {
  sm: "p",
  base: "p",
  md: "p",
  lg: "p",
  largeNumber: "span",
  stat: "span"
};
const text = (0, import_cva.cva)({
  base: import_text.default.text,
  variants: {
    color: {
      grey100: import_text.default.grey100,
      grey150: import_text.default.grey150,
      gold100: import_text.default.gold100
    },
    preset: {
      sm: import_text.default.sm,
      base: import_text.default.base,
      md: import_text.default.md,
      lg: import_text.default.lg,
      label: import_text.default.label,
      largeNumber: import_text.default.largeNumber,
      stat: import_text.default.stat
    }
  }
});
function Text({
  as = "p",
  preset = "base",
  color = "grey100",
  className,
  ...rest
}) {
  const elementType = as ?? presetElements[preset];
  return (0, import_react.createElement)(elementType, {
    ...rest,
    className: text({ preset, color, className })
  });
}
function Label({
  preset = "sm",
  color = "grey100",
  className,
  ...rest
}) {
  return (0, import_react.createElement)(import_react_aria_components.Label, {
    ...rest,
    className: text({ preset, color, className })
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Label,
  Text
});

//# sourceMappingURL=text.js.map