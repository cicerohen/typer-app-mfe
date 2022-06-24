import clsx from "clsx";
import { Editor, Element as SlateElement, Transforms } from "slate";
import { useSlate } from "slate-react";
import {
  BoldIcon,
  FormatUnderlinedIcon,
  FormatItalicIcon,
  FormatListBulletedIcon,
  FormatListNumberedIcon,
} from "@mfe/styleguide";
import { Mark, Block, Align, List } from "../services/editor";

type Valueof<T> = T[keyof T];

export type Format =
  | Valueof<typeof Mark>
  | Valueof<typeof Block>
  | Valueof<typeof List>
  | Valueof<typeof Align>;

type Props = {
  format: Format;
};

const icons = {
  [Mark.Bold]: BoldIcon,
  [Mark.Underline]: FormatUnderlinedIcon,
  [Mark.Italic]: FormatItalicIcon,
  [List.BulletedList]: FormatListBulletedIcon,
  [List.NumberedList]: FormatListNumberedIcon,
};

const listTypes = [List.BulletedList, List.NumberedList];
const alignTypes = [Align.Left, Align.Center, Align.Right, Align.Justify];

export const FormatButton = ({ format }: Props) => {
  const editor = useSlate();

  const Icon = icons[format];
  const isActive = false;

  const isMarkActive = () => {
    const marks = Editor.marks(editor);
    return !!marks?.[format];
  };

  const isBlockActive = () => {
    if (!editor.selection) {
      return false;
    }
    const type = (alignTypes.includes(format as Align) && "align") || "type";

    const [match] = Array.from(
      Editor.nodes(editor, {
        at: Editor.unhangRange(editor, editor.selection),
        match: (n) =>
          !Editor.isEditor(n) &&
          SlateElement.isElement(n) &&
          n[type] === format,
      })
    );
    return !!match;
  };

  const toggleMark = () => {
    if (isMarkActive()) {
      Editor.removeMark(editor, format);
      return;
    }
    Editor.addMark(editor, format, true);
  };

  const toggleBlock = () => {
    Transforms.unwrapNodes(editor, {
      match: (node) =>
        !Editor.isEditor(node) &&
        SlateElement.isElement(node) &&
        listTypes.includes(node.type as List) &&
        !alignTypes.includes(format as Align),
      split: true,
    });

    if (Object.values(Align).includes(format as Align)) {
      Transforms.setNodes<SlateElement>(editor, {
        align: (isBlockActive() && undefined) || (format as Align),
      });
      return;
    }
  };

  const onToggleFormat = () => {
    if (Object.values(Mark).includes(format as Mark)) {
      toggleMark();
      return;
    }

    if (Object.values(Block).includes(format as Block)) {
      toggleBlock();
    }
  };

  return (
    <button
      className={clsx("cursor-pointer", isActive && "text-indigo-7000")}
      onMouseDown={onToggleFormat}
    >
      {Icon?.()}
    </button>
  );
};
