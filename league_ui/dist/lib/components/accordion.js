"use strict";
"use client";
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
var accordion_exports = {};
__export(accordion_exports, {
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionItem: () => AccordionItem,
  AccordionTrigger: () => AccordionTrigger,
  accordionTrigger: () => accordionTrigger
});
module.exports = __toCommonJS(accordion_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cva = require("cva");
var import_react = require("react");
var import_accordion = __toESM(require("./accordion.module"));
function Accordion({ children }) {
  const [activeItem, setActiveItem] = (0, import_react.useState)("");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    AccordionContext.Provider,
    {
      value: {
        activeItem,
        setActiveItem
      },
      children
    }
  );
}
const accordionTrigger = (0, import_cva.cva)({
  base: import_accordion.default.trigger
});
function AccordionTrigger({
  children,
  className
}) {
  const { setActiveItem } = (0, import_react.useContext)(AccordionContext);
  const { item } = (0, import_react.useContext)(AccordionItemContext);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "button",
    {
      type: "button",
      className: accordionTrigger({
        className
      }),
      onClick: () => {
        setActiveItem((currentItem) => currentItem === item ? "" : item);
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: import_accordion.default.triggerIcon, children: "❯" }),
        children
      ]
    }
  );
}
function AccordionItem({ children, value }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    AccordionItemContext.Provider,
    {
      value: {
        item: value
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: import_accordion.default.item, children })
    }
  );
}
function AccordionContent({ children }) {
  const { activeItem } = (0, import_react.useContext)(AccordionContext);
  const { item } = (0, import_react.useContext)(AccordionItemContext);
  if (activeItem !== item) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: import_accordion.default.content, children });
}
const AccordionContext = (0, import_react.createContext)(void 0);
const AccordionItemContext = (0, import_react.createContext)(void 0);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  accordionTrigger
});

//# sourceMappingURL=accordion.js.map