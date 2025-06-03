import { type DialogTriggerProps as AriaDialogTriggerProps, type HeadingProps as AriaHeadingProps, type DialogProps, type ModalOverlayProps } from "react-aria-components";
interface ModalProps extends Omit<ModalOverlayProps, "children"> {
    modalOverlayClassName?: ModalOverlayProps["className"];
    dialogProps?: Omit<DialogProps, "children">;
    children?: DialogProps["children"];
}
export declare function Modal({ modalOverlayClassName, dialogProps, children, className, ...modalProps }: ModalProps): import("react/jsx-runtime").JSX.Element;
export declare function DialogHeading({ className, ...props }: AriaHeadingProps): import("react/jsx-runtime").JSX.Element;
export declare function DialogButtons({ children }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function DialogTrigger(props: AriaDialogTriggerProps): import("react/jsx-runtime").JSX.Element;
export {};
