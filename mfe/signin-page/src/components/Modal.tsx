import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";

import { Portal } from "./Portal";

type Props = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  footer?: React.ReactNode;
  isOpen: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
};

export const Modal = ({
  title,
  subtitle,
  footer,
  isOpen = false,
  children,
  onClose,
}: Props) => {
  return (
    <Portal>
      {(isOpen && (
        <div className="flex w-full z-20 justify-center items-center px-10 bg-black/80 shadow-lg fixed top-0 left-0 bottom-0 right-0 backdrop-blue">
          <section className="bg-white rounded-md min-w-max min-h-max">
            <header className="p-5 items-center justify-between flex">
              <div>
                <h3 className="uppercase font-semibold text-sm mb-2">
                  {title}
                </h3>
                <h5 className="text-xs">{subtitle}</h5>
              </div>
              <button onClick={onClose}>
                <XMarkIcon className="w-5 h-6" />
              </button>
            </header>
            <div className="w-96 p-5">{children}</div>
            {footer && <footer className="p-5">{footer}</footer>}
          </section>
        </div>
      )) ||
        null}
    </Portal>
  );
};
