import * as Yup from "yup";
import { useFormik, FormikConfig } from "formik";

export type Values = {
  email: string;
  username: string;
  password: string;
};

const Schema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 4 characters")
    .required("Password is required"),
});

export const useSignUpForm = ({
  onSubmit,
}: Pick<FormikConfig<Values>, "onSubmit">) => {
  return useFormik<Values>({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },

    onSubmit,
    validationSchema: Schema,
    validateOnBlur: true,
    validateOnChange: false,
  });
};
