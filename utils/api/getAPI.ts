export default async function get<T>(api: string): Promise<T> {
  const accessToken = localStorage.getItem("accessToken");
  const response = await fetch(`${api}`, {
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

export async function getNoToken<T>(api: string): Promise<T> {
  const response = await fetch(`${api}`, {
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
