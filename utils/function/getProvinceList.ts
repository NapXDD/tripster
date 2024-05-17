import { destination } from "@/app/type/destination";

export default function removeProvincePrefix(data: destination[]) {
  let destination: destination[] = [];
  //remove prefix
  data.forEach((item) => {
    destination.push({
      idProvince: item.idProvince,
      name: item.name.replace(/^(Thành phố|Tỉnh)\s*/, ""),
    });
  });
  return destination;
}
