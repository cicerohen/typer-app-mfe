import { fetchGraphQL } from "../fetchGraphQL";
import { SignInMutation } from "../schema";

export const signIn = async (variables) => {
  const response = await fetchGraphQL<SignInMutation>(
    /* GraphQL */ `
      mutation signIn($input: SignInInput!) {
        signIn(input: $input) {
          access_token
        }
      }
    `,
    {
      variables,
    }
  );

  return response.data.signIn;
};
