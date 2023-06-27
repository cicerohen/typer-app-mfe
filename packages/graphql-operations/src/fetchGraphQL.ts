type Data = Record<string, unknown>;

type Options = Partial<{
  preview: boolean;
  variables: Record<string, unknown>;
}>;

export const fetchGraphQL = async <D extends Data>(
  query: string,
  options?: Options,
  headers?: HeadersInit
): Promise<{
  data?: D;
  errors?: Record<string, unknown>[];
}> => {
  return fetch(`${process.env.SERVER_GRAPHQL_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.localStorage.getItem(
        "typer_access_token"
      )}`,
      ...headers,
    },
    body: JSON.stringify({ query, variables: options?.variables }),
  }).then((response) => response.json());
};
