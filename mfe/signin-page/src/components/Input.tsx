import clsx from "clsx";

export const Input = ({ invalid = false, ...rest }) => {
  return (
    <input
      {...rest}
      className={clsx(
        "mt-1",
        "block",
        "w-full",
        "px-2",
        "py-3",
        "bg-white",
        "border",
        "border-gray-300",
        "rounded-md",
        "text-sm",
        "focus:outline-none",
        "focus:border-sky-500",
        "focus:ring-1",
        "focus:ring-sky-500",
        "disabled:bg-slate-50",
        "disabled:text-slate-500",
        "disabled:border-slate-200",
        "disabled:shadow-none",
        invalid && [
          "border-red-500",
          "text-red-600",
          "focus:border-red-500",
          "focus:ring-red-500",
        ]
      )}
    />
  );
};
