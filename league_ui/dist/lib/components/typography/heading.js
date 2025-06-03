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
var heading_exports = {};
__export(heading_exports, {
  Heading: () => Heading,
  heading: () => heading
});
module.exports = __toCommonJS(heading_exports);
var import_react = require("react");
var import_heading = __toESM(require("./heading.module"));
var import_cva = require("cva");
const heading = (0, import_cva.cva)({
  base: import_heading.default.heading,
  variants: {
    color: {
      gold100: import_heading.default.gold100,
      gold200: import_heading.default.gold200,
      gold400: import_heading.default.gold400,
      grey100: import_heading.default.grey100
    },
    preset: {
      h1: import_heading.default.h1,
      h2: import_heading.default.h2,
      h3: import_heading.default.h3,
      h4: import_heading.default.h4,
      h5: import_heading.default.h5
    }
  }
});
function Heading({
  as,
  preset = "h1",
  color = "gold100",
  className,
  ...rest
}) {
  const resultAs = as ?? preset;
  return (0, import_react.createElement)(resultAs, {
    ...rest,
    className: heading({ preset, color, className })
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Heading,
  heading
});

//# sourceMappingURL=heading.js.map