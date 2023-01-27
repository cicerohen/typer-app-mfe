import { Input, InputPassword, Field } from "@typer/styleguide";
import { SocialButtons } from "../SocialButtons";

export const SignInForm = ({
  handleSubmit,
  handleChange,
  handleBlur,
  isSubmitting,
  values = {},
  errors = {},
  forgotPasswordModal,
  onOpenForgotPasswordModal,
}) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="text-4xl mb-5">Sign in</h2>
        <SocialButtons />
        <h3 className="text-sm mt-4">
          <span>Not registered on Typer yet? </span>
          <a className="text-indigo-700 uppercase" href="/signup">
            Sign Up
          </a>
        </h3>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <Field
          name="email"
          label="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          invalid={!!errors.email}
          errorMessage={errors.email}
          component={Input}
        />
        <Field
          name="password"
          label="Password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          invalid={!!errors.password}
          errorMessage={errors.password}
          component={InputPassword}
        />
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-indigo-700 form- hover:bg-indigo-700 disabled:cursor-wait disabled:bg-indigo-100 border text-xs w-full text-white uppercase rounded-md inline-flex items-center justify-center py-4 px-8 mt-4"
        >
          Sign In
        </button>
        <div className="sm:flex sm:justify-between">
          <div>
            <input
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value={values.remember}
              checked={values.remember}
              id="remember"
              name="remember"
              onChange={handleChange}
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="remember"
            >
              Remember me
            </label>
          </div>
          <p>
            Forgot password?
            <a
              href="#"
              onClick={onOpenForgotPasswordModal}
              className="text-indigo-700 ml-2"
            >
              Click here
            </a>
          </p>
        </div>
      </form>
      {forgotPasswordModal}
    </div>
  );
};
