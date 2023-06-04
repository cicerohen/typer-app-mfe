import clsx from "clsx";

import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";

import { Portal } from "./Portal";

export const Modal = ({
  title,
  subtitle,
  footer,
  isOpen = false,
  children,
  onClose,
  className,
}) => {
  return (
    <Portal>
      {(isOpen && (
        <div className="flex w-full justify-center items-center px-10 bg-black/80 shadow-lg fixed top-0 left-0 bottom-0 right-0 backdrop-blue">
          <section
            className={clsx(
              "bg-white rounded-md min-w-max min-h-max",
              className
            )}
          >
            <header className="p-5 items-center justify-between flex">
              <div>
                <h3 className="uppercase font-semibold text-sm mb-2">
                  {title}
                </h3>
                <h5 className="text-xs">{subtitle}</h5>
              </div>
              <button onClick={onClose}>
                <XMarkIcon />
              </button>
            </header>
            <div className="h-2/12 p-5">{children}</div>
            {footer && <footer className="p-5">{footer}</footer>}
          </section>
        </div>
      )) ||
        null}
    </Portal>
  );
};
