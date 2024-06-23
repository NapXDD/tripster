import { RequestInit } from "next/dist/server/web/spec-extension/request";
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
    cache: "no-store",
  });
  if (!response.ok) {
    const error = response.json();
    throw error;
  }
  return response.json();
}

export async function getNoToken<T>(
  api: string,
  tag?: string
): Promise<responseAPI<T>> {
  const response = await fetch(`${SERVER_BASE_URL}${api}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    next: { tags: [`${tag}`] },
  });
  if (!response.ok) {
    const error = response.json();
    throw error;
  }
  return response.json();
}
