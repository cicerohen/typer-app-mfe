import * as Yup from "yup";
import { useFormik } from "formik";

const Schema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
});

export const useSignInForm = ({ onSubmit }) => {
  return useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },

    onSubmit,
    validationSchema: Schema,
    validateOnBlur: true,
    validateOnChange: false,
  });
};
