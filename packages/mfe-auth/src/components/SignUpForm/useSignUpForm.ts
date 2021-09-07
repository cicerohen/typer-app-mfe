import * as Yup from "yup";
import { useFormik } from "formik";

const Schema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 4 characters")
    .required("Password is required"),
});

export const useSignUpForm = ({ onSubmit }) => {
  return useFormik({
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
