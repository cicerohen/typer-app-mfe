import clsx from "clsx";
import {} from "slate";
import { useSlate } from "slate-react";

import {
  BoldIcon,
  FormatItalicIcon,
  FormatUnderlinedIcon,
  FormatListBulletedIcon,
} from "@mfe/styleguide";

import {
  Format,
  formats,
  blockFormats,
  markFormats,
  BlockFormat,
  MarkFormat,
  isBlockActive,
  isMarkActive,
  toggleBlock,
  toggleMark,
} from "../services/editor";

const format = formats.reduce((acc, curr) => {
  acc[curr] = curr;
  return acc;
}, {} as Record<Format, Format>);

const icons = {
  [format.bold]: BoldIcon,
  [format.italic]: FormatItalicIcon,
  [format.underline]: FormatUnderlinedIcon,
  [format["bulleted-list"]]: FormatListBulletedIcon,
};

export const FormatButton = ({ format }: { format: Format }) => {
  const editor = useSlate();

  const isActive = (): boolean => {
    if (blockFormats.includes(format as BlockFormat)) {
      return isBlockActive(editor, format);
    }
    if (markFormats.includes(format as MarkFormat)) {
      return isMarkActive(editor, format);
    }
  };

  const onToggleFormat = () => {
    if (blockFormats.includes(format as BlockFormat)) {
      toggleBlock(editor, format);
      return;
    }
    if (markFormats.includes(format as MarkFormat)) {
      toggleMark(editor, format);
    }
  };

  return (
    <button
      className={clsx("cursor-pointer", isActive() && "text-indigo-7000")}
      onMouseDown={onToggleFormat}
    >
      {icons[format]?.()}
    </button>
  );
};
