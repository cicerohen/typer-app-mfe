import { useEffect, useRef } from "react";

import { UserCircle } from "@mfe/styleguide";

export const Header = ({ user = {} }) => {
  console.log("user", user);
  const wrapperRef = useRef();
  const contentRef = useRef();

  const adjustWidth = () => {
    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    contentRef.current.style.width = `${wrapperRect.width}px`;
  };

  useEffect(() => {
    adjustWidth();
    const onResize = () => {
      adjustWidth();
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("typer:sidebar-resize", onResize);
  }, []);

  return (
    <div ref={wrapperRef} className="relative h-24 w-full">
      <header
        ref={contentRef}
        className="flex fixed w-full items-center px-8 h-24 border-b border-indigo-800 bg-indigo-700 z-10"
      >
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
                <UserCircle />
              </a>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
};
