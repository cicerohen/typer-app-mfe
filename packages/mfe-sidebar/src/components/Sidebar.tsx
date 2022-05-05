import { forwardRef } from "react";

import clsx from "clsx";

import { ChevronLeftIcon, PencilAltIcon, NewspaperIcon } from "@mfe/styleguide";

type Props = {
  isOpen: boolean;
  onToggle: () => void;
};

export const Sidebar = forwardRef(({ isOpen, onToggle }: Props, ref) => {
  return (
    <div
      ref={ref}
      className={clsx("transition-[width]", (isOpen && "w-64") || "w-12")}
    >
      <aside
        className={clsx(
          "bg-white fixed transition-[width] delay-600 w-64 top-0 z-10 border-r bottom-0",
          (isOpen && "w-64") || "w-12"
        )}
      >
        <div className="flex border-b h-24 items-center justify-between">
          <button className="px-3 py-4 ml-auto" onClick={onToggle}>
            <ChevronLeftIcon className={!isOpen && "rotate-180"} />
          </button>
        </div>
        <div className="flex flex-col min-w-max">
          <ul>
            <li>
              <a
                href="/articles/new"
                className="flex hover:bg-gray-100 px-3 py-4 text-sm rounded-md uppercase items-center hover:no-underline"
              >
                <PencilAltIcon />
                <span className={(isOpen && "block ml-2") || "hidden"}>
                  New Article
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex hover:bg-gray-100 px-3 py-4 text-sm rounded-md uppercase items-center hover:no-underline"
              >
                <NewspaperIcon />
                <span className={(isOpen && "block ml-2") || "hidden"}>
                  Your articles
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
});
