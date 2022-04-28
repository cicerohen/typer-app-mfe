export const RenderElement = ({ element, attributes, children }) => {
  if (element.type === "numbered-list") {
    return <ol {...attributes}>{children}</ol>;
  }

  if (element.type === "bulleted-list") {
    return <ul {...attributes}>{children}</ul>;
  }

  if (element.type === "list-item") {
    return <li {...attributes}>{children}</li>;
  }

  return (
    <p className="bla" {...attributes}>
      {children}
    </p>
  );
};
