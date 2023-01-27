import { Input, Field, InputPassword } from "@type/styleguide";

import { SocialButtons } from "../SocialButtons";

export const SignUpForm = ({
  handleSubmit,
  handleBlur,
  handleChange,
  isSubmitting,
  values = {},
  errors = {},
}) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="text-4xl mb-5">Sign Up</h2>
        <SocialButtons />
        <h3 className="text-sm mt-4">
          <span>Already have a Typer account? </span>
          <a className="text-indigo-700 uppercase" href="/signin">
            Sign In
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
          name="username"
          label="Username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          invalid={!!errors.username}
          errorMessage={errors.username}
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
      </form>
    </div>
  );
};
