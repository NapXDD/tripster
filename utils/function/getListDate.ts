import dayjs from "dayjs";

export const getListDate = (startDate: string, endDate: string): string[] => {
  let dates: string[] = [];
  let currentDate = dayjs(startDate, "DD/MM/YYYY");
  let endD = dayjs(endDate, "DD/MM/YYYY");

  while (currentDate.isBefore(endD) || currentDate.isSame(endD, "day")) {
    dates.push(currentDate.format("ddd - DD/MM"));
    currentDate = currentDate.add(1, "day");
  }
  return dates;
};
