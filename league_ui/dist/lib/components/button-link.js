"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var button_link_exports = {};
__export(button_link_exports, {
  ButtonLink: () => ButtonLink,
  _ButtonLink: () => _ButtonLink
});
module.exports = __toCommonJS(button_link_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
var import_react_aria_components = require("react-aria-components");
var import_resolve_class_name = require("../utilities/resolve-class-name.js");
var import_button = require("./button.js");
function _ButtonLink({
  children,
  className,
  preset = "secondary",
  shape = "normal",
  thin = preset === "dimmed",
  ...props
}, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_aria_components.Link,
    {
      ref,
      ...props,
      className: (values) => {
        return (0, import_button.button)({
          className: (0, import_resolve_class_name.resolveClassName)(className, values),
          preset,
          shape,
          thin,
          ...values
        });
      },
      children
    }
  );
}
const ButtonLink = (0, import_react.forwardRef)(_ButtonLink);
ButtonLink.displayName = "ButtonLink";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ButtonLink,
  _ButtonLink
});

//# sourceMappingURL=button-link.js.map