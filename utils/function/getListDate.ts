import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export const getListDate = (startDate: string, endDate: string): string[] => {
  let dates: string[] = [];
  let currentDate = dayjs(startDate, "DD/MM/YYYY");
  let endD = dayjs(endDate, "DD/MM/YYYY");

  while (currentDate.isBefore(endD) || currentDate.isBefore(endD, "day")) {
    dates.push(currentDate.format("DD/MM"));
    currentDate = currentDate.add(1, "day");
  }
  return dates;
};
