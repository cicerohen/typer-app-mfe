import * as Yup from "yup";
import { useFormik } from "formik";

const Schema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const useForgotPasswordForm = ({ onSubmit }) => {
  return useFormik({
    initialValues: {
      email: "",
    },
    onSubmit,
    validationSchema: Schema,
    validateOnBlur: true,
    validateOnChange: false,
  });
};
