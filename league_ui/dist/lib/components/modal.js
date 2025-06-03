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
var modal_exports = {};
__export(modal_exports, {
  DialogButtons: () => DialogButtons,
  DialogHeading: () => DialogHeading,
  DialogTrigger: () => DialogTrigger,
  Modal: () => Modal
});
module.exports = __toCommonJS(modal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cva = require("cva");
var import_react_aria_components = require("react-aria-components");
var import_resolve_class_name = require("../utilities/resolve-class-name.js");
var import_modal = __toESM(require("./modal.module"));
const overlay = (0, import_cva.cva)({
  base: import_modal.default.overlay
});
const modal = (0, import_cva.cva)({
  base: import_modal.default.modal
});
const dialog = (0, import_cva.cva)({
  base: import_modal.default.dialog
});
function Modal({
  modalOverlayClassName,
  dialogProps = {},
  children,
  className,
  ...modalProps
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_aria_components.ModalOverlay,
    {
      ...modalProps,
      className: (values) => {
        return overlay({
          className: (0, import_resolve_class_name.resolveClassName)(modalOverlayClassName, values)
        });
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react_aria_components.Modal,
        {
          ...modalProps,
          className: (values) => modal({
            className: (0, import_resolve_class_name.resolveClassName)(className, values)
          }),
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_react_aria_components.Dialog,
            {
              ...dialogProps,
              className: dialog({
                className: dialogProps.className
              }),
              children
            }
          )
        }
      )
    }
  );
}
const dialogHeading = (0, import_cva.cva)({
  base: import_modal.default.dialogHeading
});
function DialogHeading({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_aria_components.Heading,
    {
      ...props,
      className: dialogHeading({
        className
      })
    }
  );
}
function DialogButtons({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: import_modal.default.dialogButtons, children });
}
function DialogTrigger(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_aria_components.DialogTrigger, { ...props });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DialogButtons,
  DialogHeading,
  DialogTrigger,
  Modal
});

//# sourceMappingURL=modal.js.map