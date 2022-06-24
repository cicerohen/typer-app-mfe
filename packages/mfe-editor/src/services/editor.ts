import { ReactEditor } from "slate-react";
import { BaseEditor } from "slate";

export enum Mark {
  Bold = "bold",
  Italic = "italic",
  Underline = "underline",
}

export enum List {
  BulletedList = "bulleted-list",
  NumberedList = "numbered-list",
}

export enum Align {
  Left = "left",
  Center = "center",
  Right = "right",
  Justify = "justify",
}

export enum Block {
  Paragraph = "paragraph",
  BlockQuote = "block-quote",
}

export type Text = Partial<Record<Mark, boolean>> & {
  text: string;
};

export type Element = {
  type: Block & List & Mark;
  children: Text[];
  align: Align;
};

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: Element;
    Text: Text;
  }
}
