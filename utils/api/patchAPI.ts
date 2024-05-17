import { BASE_URL } from "../importer";

export default async function patch<T, Y>(api: string, body: T): Promise<Y> {
  const response = await fetch(`${BASE_URL}${api}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
