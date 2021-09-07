import { SignInFormContainer } from "./containers/SignInFormContainer";
import { SignUpFormContainer } from "./containers/SignUpFormContainer";

export const App = ({ intent }) => {
  console.log("intent", intent);
  return (
    <main className="p-8 flex flex-1 items-center">
      <div className="flex-1 md:max-w-2xl md:m-auto">
        {intent === "SIGNIN" && <SignInFormContainer />}
        {intent === "SIGNUP" && <SignUpFormContainer />}
      </div>
    </main>
  );
};
