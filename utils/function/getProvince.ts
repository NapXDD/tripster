export default function removeProvincePrefix(data: string) {
  return data.replace(/^(Thành phố|Tỉnh)\s*/, "");
}
