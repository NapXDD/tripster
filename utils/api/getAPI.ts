import { responseAPI } from "../entities/response";
import { SERVER_BASE_URL } from "../importer";

export default async function get<T>(
  api: string,
  accessToken: string
): Promise<responseAPI<T>> {
  const response = await fetch(`${SERVER_BASE_URL}${api}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!response.ok) {
    const error = response.json();
    throw error;
  }
  return response.json();
}

export async function getNoToken<T>(api: string): Promise<responseAPI<T>> {
  const response = await fetch(`${SERVER_BASE_URL}${api}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    const error = response.json();
    throw error;
  }
  return response.json();
}
