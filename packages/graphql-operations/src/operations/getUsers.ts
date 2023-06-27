import { fetchGraphQL } from "../fetchGraphQL";
import { GetUsersQuery } from "../schema";

export const getUsers = async () => {
  const response = await fetchGraphQL<GetUsersQuery>(/* GraphQL */ `
    query getUsers {
      users {
        id
        name {
          first
          last
        }
        email
      }
    }
  `);

  return response.data.users;
};
