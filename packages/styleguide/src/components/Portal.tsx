import { useState } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children }) => {
  const [mountNode] = useState(document.body);
  return createPortal(children, mountNode);
};
