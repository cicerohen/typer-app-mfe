import { Header } from "./Header";

type Props = {
  children?: React.ReactNode;
};

export const Page = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
