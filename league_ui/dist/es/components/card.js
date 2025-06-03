import { jsx } from "react/jsx-runtime";
import { cva } from "cva";
import classes from "./card.module";
const card = cva({
  base: classes.card
});
function Card({
  className,
  style,
  radius = "1rem",
  borderWidth = "2px",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: card({ className }),
      style: {
        // @ts-ignore: Css variable
        "--lol-card-radius": radius,
        "--lol-card-border-width": borderWidth,
        ...style ?? {}
      },
      ...props
    }
  );
}
export {
  Card
};

//# sourceMappingURL=card.js.map