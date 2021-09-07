import { useState } from "react";

import { SignInForm, useSignInForm } from "../components/SignInForm";
import { ForgotPasswordModal } from "../components/ForgotPasswordModal";

export const SignInFormContainer = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpenForgotPasswordModal = () => {
    setIsOpen(true);
  };

  const form = useSignInForm({
    onSubmit: ({ values }) => {
      const user = {
        ...values,
      };
      const evt = new CustomEvent("auth:onSignIn", {
        detail: { user },
      });
      window.dispatchEvent(evt);
      localStorage.setItem("auth:user", JSON.stringify(user));
    },
  });

  return (
    <SignInForm
      {...form}
      onOpenForgotPasswordModal={onOpenForgotPasswordModal}
      forgotPasswordModal={
        <ForgotPasswordModal isOpen={isOpen} onClose={onClose} />
      }
      {...props}
    />
  );
};
