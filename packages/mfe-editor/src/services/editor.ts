import { ReactEditor } from "slate-react";
import { BaseEditor, Editor, Element as SlateElement, Transforms } from "slate";

export const alignFormats = ["left", "center", "right", "justify"] as const;
export const listFormats = [
  "list-item",
  "bulleted-list",
  "numbered-list",
] as const;

export const markFormats = [
  "bold",
  "italic",
  "block-quote",
  "underline",
] as const;
export const blockFormats = [
  ...alignFormats,
  ...listFormats,
  "paragraph",
] as const;
export const formats = [...markFormats, ...blockFormats] as const;

export type ListFormat = typeof listFormats[number];
export type AlignFormat = typeof alignFormats[number];
export type MarkFormat = typeof markFormats[number];
export type BlockFormat = typeof blockFormats[number];
export type Format = typeof formats[number];

export type Text = Partial<Record<MarkFormat, boolean>> & {
  text: string;
};

type ElementType = Exclude<Format, AlignFormat>;

export type Element = {
  type: ElementType;
  children: Text[];
  align?: AlignFormat;
};

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: Element;
    Text: Text;
  }
}

export const isBlockActive = (editor: Editor, format: Format) => {
  if (!editor.selection) {
    return false;
  }

  const key: keyof Omit<Element, "children"> =
    (alignFormats.includes(format as Align) && "align") || "type";

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, editor.selection),
      match: (n) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n[key] === format,
    })
  );
  return !!match;
};

export const isMarkActive = (editor: Editor, format: Format) => {
  const marks = Editor.marks(editor);
  return !!marks?.[format];
};

export const toggleMark = (editor: Editor, format: Format) => {
  if (isMarkActive(editor, format)) {
    Editor.removeMark(editor, format);
    return;
  }
  Editor.addMark(editor, format, true);
};

export const toggleBlock = (editor: Editor, format: Format) => {
  Transforms.unwrapNodes(editor, {
    match: (node) =>
      !Editor.isEditor(node) &&
      SlateElement.isElement(node) &&
      listFormats.includes(node.type as ListFormat) &&
      !alignFormats.includes(format as AlignFormat),
    split: true,
  });

  const isActive = isBlockActive(editor, format);
  const isAlign = alignFormats.includes(format as AlignFormat);
  const isList = listFormats.includes(format as ListFormat);

  const getElement = (): Partial<Element> => {
    if (isAlign) {
      return {
        align: isActive ? undefined : (format as Align),
      };
    }
    return {
      type:
        (isActive && "paragraph") ||
        (isList && "list-item") ||
        (format as ElementType),
    };
  };

  Transforms.setNodes<SlateElement>(editor, getElement());

  if (!isActive && isList) {
    Transforms.wrapNodes(editor, {
      type: format as ElementType,
      children: [],
    });
  }
};
