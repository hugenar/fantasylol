function resolveClassName(className, values) {
  return typeof className === "function" ? className(values) : className ?? "";
}
export {
  resolveClassName
};

//# sourceMappingURL=resolve-class-name.js.map