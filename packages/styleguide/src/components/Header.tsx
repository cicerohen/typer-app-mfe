import UserCircleIcon from "@heroicons/react/24/solid/UserCircleIcon";

type Props = {
  user?: any;
};

export const Header = ({ user }: Props) => {
  return (
    <header className="flex sticky top-0 w-full items-center px-8 h-24 border-b border-indigo-800 bg-indigo-700 z-10">
      <a href="/" className="uppercase text-white ">
        Typer
      </a>
      <div className="flex ml-auto">
        <nav className="space-x-1 hidden mr-1 lg:block">
          {(!user && (
            <>
              <a
                href="/signin"
                className="text-white hover:bg-indigo-600 text-sm uppercase rounded-md inline-flex items-center justify-center py-4 px-8"
              >
                Sign In
              </a>
              <a
                href="/signup"
                className="text-white hover:bg-indigo-600 text-sm uppercase rounded-md inline-flex items-center justify-center py-4 px-8"
              >
                Sign Up
              </a>
            </>
          )) || (
            <a
              href="/dashboard"
              className="text-white hover:bg-indigo-600 text-sm uppercase rounded-md inline-flex items-center justify-center p-4"
            >
              <UserCircleIcon className="h-6 w-6" />
            </a>
          )}
        </nav>
      </div>
    </header>
  );
};
