import { SERVER_BASE_URL } from "../importer";

export default async function patch<Y>(
  api: string,
  body: FormData,
  accessToken: string
): Promise<Y> {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);
  const response = await fetch(`${SERVER_BASE_URL}${api}`, {
    method: "PATCH",
    headers: myHeaders,
    body: body,
    redirect: "follow",
  });

  if (!response.ok) {
    const error = await response.json();
    throw error;
  }

  return response.json();
}
