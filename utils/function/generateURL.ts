import dayjs from "dayjs";
import { cities } from "../importer";
import removeProvincePrefix from "./getProvince";

function convertString(str: string) {
  // Normalize the string to remove diacritics
  const normalizedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Convert to lowercase
  const lowerCaseStr = normalizedStr.toLowerCase();

  // Replace spaces with hyphens
  const result = lowerCaseStr.replace(/\s+/g, "-");

  return result;
}

export function generateUrlCoach(
  cityStart: string,
  cityEnd: string,
  datePlan: string
) {
  const codeStart = convertString(cityStart);
  const codeEnd = convertString(cityEnd);
  const codeDate = dayjs(datePlan.split(" ")[0], "YYYY-MM-DD")
    .subtract(1, "day")
    .format("DD-MM-YYYY");
  const url = `https://vexere.com/vi-VN/ve-xe-khach-tu-${codeStart}-di-${codeEnd}-129t181.html?date=${codeDate}&v=4`;
  return url;
}

export function generateUrlFlight(
  cityStart: string,
  cityEnd: string,
  dateStart: string
) {
  debugger;
  const codeStart = cities.filter(
    (item) => item.name === removeProvincePrefix(cityStart)
  )[0].value;
  const codeEnd = cities.filter(
    (item) => item.name === removeProvincePrefix(cityEnd)
  )[0].value;
  const codeDate = dayjs(
    dateStart,
    dateStart.split(" ")[0],
    "YYYY-MM-DD"
  ).format("DD-M-YYYY");
  const url = `https://www.traveloka.com/vi-vn/flight/fullsearch?ap=${codeStart}.${codeEnd}&dt=${codeDate}.NA&ps=1.0.0&sc=ECONOMY`;
  return url;
}
