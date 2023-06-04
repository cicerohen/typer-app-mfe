import { useState } from "react";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

type Props = {
  children?: React.ReactNode;
};

export const Page = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToggle = () => {
    setIsOpen((prev) => {
      return !prev;
    });
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} onToggle={onToggle} />
      <div className="flex-1">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};
