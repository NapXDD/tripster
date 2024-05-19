import { error, responseAPI } from "../entities/response";
import { SERVER_BASE_URL } from "../importer";

export default async function post<T, Y>(
  api: string,
  body: T
): Promise<responseAPI<Y>> {
  const accessToken = localStorage.getItem("accessToken");
  const response = await fetch(`${SERVER_BASE_URL}${api}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.json();
    throw error;
  }

  return response.json();
}

export async function postNoToken<T, Y>(
  api: string,
  body: T
): Promise<responseAPI<Y>> {
  const response = await fetch(`${SERVER_BASE_URL}${api}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.json();
    throw error;
  }

  return response.json();
}
