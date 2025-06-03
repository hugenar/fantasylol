import { jsx } from "react/jsx-runtime";
import { cva } from "cva";
import {
  DialogTrigger as AriaDialogTrigger,
  Heading as AriaHeading,
  Modal as AriaModal,
  Dialog,
  ModalOverlay
} from "react-aria-components";
import { resolveClassName } from "../utilities/resolve-class-name.js";
import classes from "./modal.module";
const overlay = cva({
  base: classes.overlay
});
const modal = cva({
  base: classes.modal
});
const dialog = cva({
  base: classes.dialog
});
function Modal({
  modalOverlayClassName,
  dialogProps = {},
  children,
  className,
  ...modalProps
}) {
  return /* @__PURE__ */ jsx(
    ModalOverlay,
    {
      ...modalProps,
      className: (values) => {
        return overlay({
          className: resolveClassName(modalOverlayClassName, values)
        });
      },
      children: /* @__PURE__ */ jsx(
        AriaModal,
        {
          ...modalProps,
          className: (values) => modal({
            className: resolveClassName(className, values)
          }),
          children: /* @__PURE__ */ jsx(
            Dialog,
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
const dialogHeading = cva({
  base: classes.dialogHeading
});
function DialogHeading({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    AriaHeading,
    {
      ...props,
      className: dialogHeading({
        className
      })
    }
  );
}
function DialogButtons({ children }) {
  return /* @__PURE__ */ jsx("div", { className: classes.dialogButtons, children });
}
function DialogTrigger(props) {
  return /* @__PURE__ */ jsx(AriaDialogTrigger, { ...props });
}
export {
  DialogButtons,
  DialogHeading,
  DialogTrigger,
  Modal
};

//# sourceMappingURL=modal.js.map