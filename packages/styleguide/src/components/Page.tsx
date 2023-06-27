import { Header } from "./Header";

type Props = {
  children?: React.ReactNode;
  user?: Record<string, unknown>;
};

export const Page = ({ user, children }: Props) => {
  return (
    <div>
      <Header user={user} />
      <main>{children}</main>
    </div>
  );
};
