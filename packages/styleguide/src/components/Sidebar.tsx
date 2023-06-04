import clsx from "clsx";

import ChevronLeftIcon from "@heroicons/react/24/solid/ChevronLeftIcon";
import PencilIcon from "@heroicons/react/24/solid/PencilIcon";
import NewspaperIcon from "@heroicons/react/24/solid/NewspaperIcon";

type Props = {
  isOpen: boolean;
  onToggle: () => void;
};

export const Sidebar = ({ isOpen, onToggle }: Props) => {
  return (
    <div
      className={clsx(
        "transition-[width] relative",
        (isOpen && "w-64") || "w-12"
      )}
    >
      <aside
        className={clsx(
          "bg-white fixed transition-[width] delay-600  top-0 z-20 border-r bottom-0",
          (isOpen && "w-64") || "w-12"
        )}
      >
        <div className="flex border-b h-24 items-center justify-between">
          <button className="px-3 py-4 ml-auto" onClick={onToggle}>
            <ChevronLeftIcon
              className={clsx("w-6 h-6", !isOpen && "rotate-180")}
            />
          </button>
        </div>
        <div className="flex flex-col min-w-max">
          <ul>
            <li>
              <a
                href="/articles/new"
                className="flex hover:bg-gray-100 px-3 py-4 text-sm rounded-md uppercase items-center hover:no-underline"
              >
                <PencilIcon className="h-5 w-5" />
                <span className={(isOpen && "block ml-2") || "hidden"}>
                  New Article
                </span>
              </a>
            </li>
            <li>
              <a
                href="/articles"
                className="flex hover:bg-gray-100 px-3 py-4 text-sm rounded-md uppercase items-center hover:no-underline"
              >
                <NewspaperIcon className="w-5 h-5" />
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
};
