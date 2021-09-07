import {
  BoldIcon,
  FormatItalicIcon,
  FormatListBulletedIcon,
  FormatUnderlinedIcon,
  FormatQuoteIcon,
} from "@mfe/styleguide";

export const Toolbar = () => {
  return (
    <section className="bg-gray-50 border-b border-gray-200 mb-8">
      <div className="flex py-4 h-16 md:max-w-7xl md:m-auto">
        <div className="flex flex-1 divide-x-2">
          <div className="flex space-x-1">
            <button>
              <BoldIcon />
            </button>
            <button>
              <FormatItalicIcon />
            </button>
            <button>
              <FormatUnderlinedIcon />
            </button>
          </div>
          <div className="flex space-x-1">
            <button>
              <FormatListBulletedIcon />
            </button>
            <button>
              <FormatQuoteIcon />
            </button>
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
