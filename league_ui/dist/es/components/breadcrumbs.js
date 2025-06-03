import { jsx, jsxs } from "react/jsx-runtime";
import {
  Breadcrumb as AriaBreadcrumb,
  Breadcrumbs as AriaBreadcrumbs,
  Link
} from "react-aria-components";
import { resolveClassName } from "../utilities/resolve-class-name.js";
import { cva } from "cva";
import classes from "./breadcrumbs.module";
const breadCrumbIconSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAALCAYAAACtWacbAAAA+0lEQVQYV12QsUoDURBF74xbxHLB9NqHbWwSwUJIutSbQCqb5BPMJ8RPcBttlMR8ggYLkRVxm8XGyk9IFQgx+668zb7N4sDAvJnDu3NHUIk0nrWDVu+52rO1uEb6Ph0KcSNE1Djrj6pgDjnADQRy3Wj1xuX7+/PhaPOrdQBvAHwAS4p2QPpOWkhK+jE/NiajR1lQNVRjhhTYHAXNflTu9PNyWzu5uFx/xbMJwSsnRSIsIbcboInQPBXSCbdZJ4fsL6vDWpeUuXVnVCOhmXCbhcH5YLlzF08HAtwB8HZ3+ecuh17vffEOrMSpcxc0w2R/kqIqwEeKjquAHf8Bd1xn7M0vJ+QAAAAASUVORK5CYII=";
const breadCrumbs = cva({
  base: "flex gap-1"
});
function Breadcrumbs(props) {
  return /* @__PURE__ */ jsx(
    AriaBreadcrumbs,
    {
      ...props,
      className: breadCrumbs({ className: props.className })
    }
  );
}
const breadCrumb = cva({
  base: classes.breadCrumb
});
const breadCrumbLink = cva({
  base: classes.breadCrumbLink,
  variants: {
    isHovered: { true: classes.breadCrumbLink_hover }
  }
});
function Breadcrumb(props) {
  return /* @__PURE__ */ jsxs(
    AriaBreadcrumb,
    {
      ...props,
      className: (values) => breadCrumb({
        className: resolveClassName(props.className, values)
      }),
      children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            className: (values) => breadCrumbLink({
              isHovered: values.isHovered
            }),
            ...props
          }
        ),
        props.href && /* @__PURE__ */ jsx(
          "img",
          {
            src: breadCrumbIconSrc,
            alt: "",
            className: classes.breadCrumbDivider
          }
        )
      ]
    }
  );
}
export {
  Breadcrumb,
  Breadcrumbs
};

//# sourceMappingURL=breadcrumbs.js.map