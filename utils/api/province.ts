import { destination } from "@/app/types/destination";
import { option } from "@/app/types/option";
import { getNoToken } from "./getAPI";

export async function getAllProvinceOption() {
  const response = await getNoToken<destination[]>(
    "https://vietnam-administrative-division-json-server-swart.vercel.app/province"
  );

  const data: option[] = [];
  response.forEach((value) => {
    data.push({ label: value.name, value: value.idProvince });
  });
  return data;
}
