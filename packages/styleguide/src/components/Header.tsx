import { Popover } from "@headlessui/react";
import UserCircleIcon from "@heroicons/react/24/solid/UserCircleIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import BookmarkIcon from "@heroicons/react/24/outline/BookmarkIcon";
import DocumentTextIcon from "@heroicons/react/24/outline/DocumentTextIcon";

export const Header = () => {
  return (
    <header className="flex sticky top-0 w-full items-center px-8 h-24 border-b border-indigo-800 bg-indigo-700 z-10">
      <a href="/" className="uppercase text-white ">
        Typer
      </a>
      <div className="flex ml-auto">
        <nav className="space-x-1 mr-1">
          <ul>
            <Popover className="relative" as="li">
              {() => {
                return (
                  <>
                    <Popover.Button>
                      <UserCircleIcon className="w-8 h-8 text-white" />
                    </Popover.Button>
                    <Popover.Panel className="absolute -right-2 w-72 mt-2">
                      <div className="bg-white divide-y divide-gray-200 shadow-md rounded-md">
                        <ul className="py-4">
                          <li>
                            <a
                              href="/dashboard"
                              className="flex px-6 py-2  items-center text-gray-600 text-sm"
                            >
                              <UserIcon className="h-6 w-6 mr-2" />
                              <span>Profile</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="flex px-6 py-2  items-center text-gray-600 text-sm"
                            >
                              <BookmarkIcon className="h-6 w-6 mr-2" />
                              <span>Library</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="flex px-6 py-2  items-center text-gray-600 text-sm"
                            >
                              <DocumentTextIcon className="h-6 w-6 mr-2" />
                              <span>Stories</span>
                            </a>
                          </li>
                        </ul>
                        <ul className="py-4">
                          <li>
                            <a
                              href="/me/settings"
                              className="flex px-6 py-2 items-center text-gray-600 text-sm"
                            >
                              Settings
                            </a>
                          </li>
                          <li>
                            <a
                              href="/signout"
                              className="flex px-6 py-2 items-center text-gray-600 text-sm"
                            >
                              Sign out
                            </a>
                          </li>
                        </ul>
                        {/* <p className="text-center font-semibold">
                        Get started with Typer
                      </p>
                      <div className="space-y-2">
                        <a
                          href="/signup"
                          className="block py-2 bg-green-600 rounded-full text-white text-center hover:bg-green-700"
                        >
                          Sign up
                        </a>
                        <a
                          href="/signin"
                          className="block py-2 rounded-full border border-gray-200 text-gray-600 text-center"
                        >
                          Sign in
                        </a>
                      </div> */}
                      </div>
                    </Popover.Panel>
                  </>
                );
              }}
            </Popover>
          </ul>
        </nav>
      </div>
    </header>
  );
};
