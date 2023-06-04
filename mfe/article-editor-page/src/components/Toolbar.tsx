import { FormatButton } from "./FormatButton";

export const Toolbar = () => {
  return (
    <section className="bg-gray-50 border-b border-gray-200 mb-8">
      <div className="flex py-4 h-16 md:max-w-7xl md:m-auto">
        <div className="flex flex-1 divide-x-2">
          <div className="flex space-x-1">
            <FormatButton format="bold" />
            <FormatButton format="italic" />
            <FormatButton format="underline" />
          </div>
          <div className="flex space-x-1">
            <FormatButton format="bulleted-list" />
            <FormatButton format="numbered-list" />
          </div>
        </div>
        <div>
          <button className="text-indigo-700 text-sm font-semibold border border-indigo-700 rounded rounded-md px-4 py-2">
            Publish
          </button>
        </div>
      </div>
    </section>
  );
};
