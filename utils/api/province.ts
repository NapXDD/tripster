import { destination } from "@/app/types/destination";
import { option } from "@/app/types/option";
import { getNoToken } from "./getAPI";
import { postNoToken } from "./postAPI";
import { ImageProvinceEntity } from "../entities/province";
import { ImageProvinceDTO } from "../DTO/province";

export async function getAllProvinceOption(): Promise<option[]> {
  const response = await fetch(
    "https://vietnam-administrative-division-json-server-swart.vercel.app/province"
  );
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = (await response.json()) as unknown as destination[];

  const transformedData = data.map((item) => ({
    label: item.name,
    value: item.idProvince,
  }));

  return transformedData;
}

export async function getImageProvince(name: string) {
  const response = await postNoToken<ImageProvinceDTO, ImageProvinceEntity>(
    "/plan/imageProvince",
    { name: name }
  );
  return response;
}
