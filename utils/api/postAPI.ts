import { BASE_URL } from "../importer";

export default async function post<T>({
  api,
  body,
}: {
  api: string;
  body: T;
}): Promise<Response> {
  const response = await fetch(`${BASE_URL}${api}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response;
}
