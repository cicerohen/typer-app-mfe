import { SignUpForm, useSignUpForm } from "../components/SignUpForm";

export const SignUpFormContainer = (props) => {
  const form = useSignUpForm({
    onSubmit: ({ values }) => {
      console.log("submit sign up form", values);
    },
  });

  return <SignUpForm {...form} {...props} />;
};
