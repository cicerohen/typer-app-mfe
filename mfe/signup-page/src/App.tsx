import { Page } from "@typer/styleguide";

import { SignUpForm } from "./components/SignUpForm";
import { useSignUpForm } from "./hooks/useSignUpForm";

export const App = () => {
  const form = useSignUpForm({
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Page>
      <SignUpForm {...form} />
    </Page>
  );
};
