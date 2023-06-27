import { useState } from "react";

import { Page } from "@typer/styleguide";
import { getUsers } from "@typer/graphql";

import { Modal } from "./components/Modal";
import { SignInForm } from "./components/SignInForm";
import { ForgotPasswordForm } from "./components/ForgotPasswordForm";
import { useSignInForm } from "./hooks/useSignInForm";
import { useForgotPasswordForm } from "./hooks/useForgotPasswordForm";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenForgotPasswordModal = () => {
    setIsOpen(true);
  };

  const onCloseForgotPasswordModal = () => {
    setIsOpen(false);
  };

  const form = useSignInForm({
    onSubmit: async () => {
      try {
        await getUsers();
      } catch (err) {
        console.log("err", err);
      }
    },
  });

  const forgotPasswordForm = useForgotPasswordForm({
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <Page>
      <SignInForm
        {...form}
        onOpenForgotPasswordModal={onOpenForgotPasswordModal}
      />
      <Modal
        isOpen={isOpen}
        onClose={onCloseForgotPasswordModal}
        title="Reset your password"
        subtitle="Let’s get you a new password"
      >
        <ForgotPasswordForm {...forgotPasswordForm} />
      </Modal>
    </Page>
  );
};
