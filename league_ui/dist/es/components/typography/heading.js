import { createElement } from "react";
import classes from "./heading.module";
import { cva } from "cva";
const heading = cva({
  base: classes.heading,
  variants: {
    color: {
      gold100: classes.gold100,
      gold200: classes.gold200,
      gold400: classes.gold400,
      grey100: classes.grey100
    },
    preset: {
      h1: classes.h1,
      h2: classes.h2,
      h3: classes.h3,
      h4: classes.h4,
      h5: classes.h5
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
  return createElement(resultAs, {
    ...rest,
    className: heading({ preset, color, className })
  });
}
export {
  Heading,
  heading
};

//# sourceMappingURL=heading.js.map