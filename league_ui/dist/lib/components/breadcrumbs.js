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
var breadcrumbs_exports = {};
__export(breadcrumbs_exports, {
  Breadcrumb: () => Breadcrumb,
  Breadcrumbs: () => Breadcrumbs
});
module.exports = __toCommonJS(breadcrumbs_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react_aria_components = require("react-aria-components");
var import_resolve_class_name = require("../utilities/resolve-class-name.js");
var import_cva = require("cva");
var import_breadcrumbs = __toESM(require("./breadcrumbs.module"));
const breadCrumbIconSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAALCAYAAACtWacbAAAA+0lEQVQYV12QsUoDURBF74xbxHLB9NqHbWwSwUJIutSbQCqb5BPMJ8RPcBttlMR8ggYLkRVxm8XGyk9IFQgx+668zb7N4sDAvJnDu3NHUIk0nrWDVu+52rO1uEb6Ph0KcSNE1Djrj6pgDjnADQRy3Wj1xuX7+/PhaPOrdQBvAHwAS4p2QPpOWkhK+jE/NiajR1lQNVRjhhTYHAXNflTu9PNyWzu5uFx/xbMJwSsnRSIsIbcboInQPBXSCbdZJ4fsL6vDWpeUuXVnVCOhmXCbhcH5YLlzF08HAtwB8HZ3+ecuh17vffEOrMSpcxc0w2R/kqIqwEeKjquAHf8Bd1xn7M0vJ+QAAAAASUVORK5CYII=";
const breadCrumbs = (0, import_cva.cva)({
  base: "flex gap-1"
});
function Breadcrumbs(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_aria_components.Breadcrumbs,
    {
      ...props,
      className: breadCrumbs({ className: props.className })
    }
  );
}
const breadCrumb = (0, import_cva.cva)({
  base: import_breadcrumbs.default.breadCrumb
});
const breadCrumbLink = (0, import_cva.cva)({
  base: import_breadcrumbs.default.breadCrumbLink,
  variants: {
    isHovered: { true: import_breadcrumbs.default.breadCrumbLink_hover }
  }
});
function Breadcrumb(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_react_aria_components.Breadcrumb,
    {
      ...props,
      className: (values) => breadCrumb({
        className: (0, import_resolve_class_name.resolveClassName)(props.className, values)
      }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_react_aria_components.Link,
          {
            className: (values) => breadCrumbLink({
              isHovered: values.isHovered
            }),
            ...props
          }
        ),
        props.href && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "img",
          {
            src: breadCrumbIconSrc,
            alt: "",
            className: import_breadcrumbs.default.breadCrumbDivider
          }
        )
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Breadcrumb,
  Breadcrumbs
});

//# sourceMappingURL=breadcrumbs.js.map