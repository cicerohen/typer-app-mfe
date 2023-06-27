import { Popover } from "@headlessui/react";
import UserCircleIcon from "@heroicons/react/24/solid/UserCircleIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import BookmarkIcon from "@heroicons/react/24/outline/BookmarkIcon";
import DocumentTextIcon from "@heroicons/react/24/outline/DocumentTextIcon";

type Props = {
  user?: Record<string, unknown>;
};

export const Header = ({ user }: Props) => {
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
                      {user?.id ? (
                        <div className="bg-white shadow-md rounded-md divide-y divide-gray-200">
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
                        </div>
                      ) : (
                        <div className="p-6 space-y-6 bg-white shadow-md rounded-md divide-y divide-gray-200">
                          <p className="text-center font-semibold">
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
                              className="block py-2 rounded-full border border-gray-200 text-gray-600 text-center hover:bg-gray-100"
                            >
                              Sign in
                            </a>
                          </div>
                        </div>
                      )}
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
