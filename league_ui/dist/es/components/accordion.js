"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { cva } from "cva";
import { createContext, useContext, useState } from "react";
import classes from "./accordion.module";
function Accordion({ children }) {
  const [activeItem, setActiveItem] = useState("");
  return /* @__PURE__ */ jsx(
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
const accordionTrigger = cva({
  base: classes.trigger
});
function AccordionTrigger({
  children,
  className
}) {
  const { setActiveItem } = useContext(AccordionContext);
  const { item } = useContext(AccordionItemContext);
  return /* @__PURE__ */ jsxs(
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
        /* @__PURE__ */ jsx("span", { className: classes.triggerIcon, children: "❯" }),
        children
      ]
    }
  );
}
function AccordionItem({ children, value }) {
  return /* @__PURE__ */ jsx(
    AccordionItemContext.Provider,
    {
      value: {
        item: value
      },
      children: /* @__PURE__ */ jsx("div", { className: classes.item, children })
    }
  );
}
function AccordionContent({ children }) {
  const { activeItem } = useContext(AccordionContext);
  const { item } = useContext(AccordionItemContext);
  if (activeItem !== item) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { className: classes.content, children });
}
const AccordionContext = createContext(void 0);
const AccordionItemContext = createContext(void 0);
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  accordionTrigger
};

//# sourceMappingURL=accordion.js.map