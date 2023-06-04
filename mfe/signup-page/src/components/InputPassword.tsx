import clsx from "clsx";
import { useState } from "react";
import EyeIcon from "@heroicons/react/24/solid/EyeIcon";
import EyeSlashIcon from "@heroicons/react/24/solid/EyeSlashIcon";

export const InputPassword = ({ invalid, ...rest }) => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <span
      className={clsx(
        "flex",
        "bg-white",
        "border",
        "border-gray-300",
        "rounded-md",
        "mt-1",
        "w-full",
        "overflow-hidden",
        "items-stretch",
        "relative",
        invalid && [
          "border-red-500",
          "text-red-600",
          "focus:border-red-500",
          "focus:ring-red-500",
        ]
      )}
    >
      <input
        {...rest}
        className="flex-1 px-2 py-3 text-sm mr-12 border-0"
        type={(show && "text") || "password"}
      />
      <button
        tabIndex={0}
        type="button"
        onClick={toggle}
        className="text-gray-500 w-12 hover:bg-gray-200 focus:bg-gray-200 h-full flex items-center justify-center cursor-pointer absolute right-0"
      >
        {show ? (
          <EyeIcon className="w-6 h-6" />
        ) : (
          <EyeSlashIcon className="w-6 h-6" />
        )}
      </button>
    </span>
  );
};
