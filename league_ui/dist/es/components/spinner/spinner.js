import { jsx } from "react/jsx-runtime";
import { cx } from "cva";
import classes from "./spinner.module";
import spinnerImage from "../../assets/spinner.a69432f7.png";
function Spinner({ className }) {
  return /* @__PURE__ */ jsx(
    "img",
    {
      role: "status",
      "aria-live": "polite",
      "aria-label": "loading",
      src: spinnerImage,
      className: cx(classes.spinner, className)
    }
  );
}
export {
  Spinner
};

//# sourceMappingURL=spinner.js.map