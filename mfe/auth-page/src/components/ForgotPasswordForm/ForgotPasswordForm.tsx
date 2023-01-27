import { Input, Field } from "@typer/styleguide";

import { useForgotPasswordForm } from "./useForgotPasswordForm";

export const ForgotPasswordForm = ({ onSubmit }) => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  } = useForgotPasswordForm({
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        label="Email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        invalid={!!errors?.email}
        errorMessage={errors?.email}
        component={Input}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-indigo-600 form- hover:bg-indigo-700 disabled:cursor-wait disabled:bg-indigo-100 border text-xs w-full text-white uppercase rounded-md inline-flex items-center justify-center py-4 px-8 mt-4"
      >
        Reset Password
      </button>
    </form>
  );
};
