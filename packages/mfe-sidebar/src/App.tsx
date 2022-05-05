import { Sidebar } from "./components/Sidebar";
import { useState, useEffect, useCallback } from "react";

export const App = () => {
  const [sidebarRef, setSidebarRef] = useState<HTMLElement>();

  const callbackRef = useCallback((el) => {
    if (el) {
      setSidebarRef(el);
    }
  }, []);

  const [isOpen, setIsOpen] = useState(
    JSON.parse(localStorage.getItem("typer:sidebar-open"))
  );

  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (!entries[0]?.contentRect) {
        return;
      }
      const event = new CustomEvent("typer:sidebar-resize", {
        detail: {
          width: entries[0].contentRect.width,
        },
      });
      window.dispatchEvent(event);
    });

    observer.observe(sidebarRef);
  }, [sidebarRef]);

  useEffect(() => {
    localStorage.setItem("typer:sidebar-open", isOpen);
  }, [isOpen]);

  return <Sidebar ref={callbackRef} isOpen={isOpen} onToggle={onToggle} />;
};
