import { BASE_URL } from "../importer";

export default async function post<T, Y>(api: string, body: T): Promise<Y> {
  const accessToken = localStorage.getItem("accessToken");
  const response = await fetch(`${BASE_URL}${api}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
