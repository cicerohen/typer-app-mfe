import { Modal } from "@mfe/styleguide";
import { ForgotPasswordForm } from "./ForgotPasswordForm";

export const ForgotPasswordModal = ({
  forgotPasswordFormProps = {},
  ...rest
}) => {
  return (
    <Modal
      {...rest}
      title="Reset your password"
      subtitle="Let’s get you a new password"
      className="w-2/6"
    >
      <ForgotPasswordForm {...forgotPasswordFormProps} />
    </Modal>
  );
};
