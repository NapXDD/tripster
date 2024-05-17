export default async function get<T>(api: string): Promise<T> {
  const response = await fetch(`${api}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
