export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type AuthResponse = {
  access_token: Scalars["String"]["output"];
};

export type Mutation = {
  deleteUser: User;
  signIn: AuthResponse;
  signUp: AuthResponse;
  updateUser: User;
};

export type MutationDeleteUserArgs = {
  id: Scalars["String"]["input"];
};

export type MutationSignInArgs = {
  input: SignInInput;
};

export type MutationSignUpArgs = {
  input: SignUpInput;
};

export type MutationUpdateUserArgs = {
  id: Scalars["String"]["input"];
  input: UpdateUserInput;
};

export type Query = {
  user: User;
  users: Array<User>;
};

export type QueryUserArgs = {
  id: Scalars["String"]["input"];
};

export type SignInInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type SignUpInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type UpdateUserInput = {
  name?: InputMaybe<UserNameInput>;
};

export type User = {
  email: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  name: UserName;
};

export type UserName = {
  first: Scalars["String"]["output"];
  last: Scalars["String"]["output"];
};

export type UserNameInput = {
  first?: InputMaybe<Scalars["String"]["input"]>;
  last?: InputMaybe<Scalars["String"]["input"]>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  users: Array<{
    id: string;
    email: string;
    name: { first: string; last: string };
  }>;
};

export type SignInMutationVariables = Exact<{
  input: SignInInput;
}>;

export type SignInMutation = { signIn: { access_token: string } };
