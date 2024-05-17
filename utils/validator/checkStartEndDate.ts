export default function checkStartEndDate(startDate: string, endDate: string) {
  if (startDate === "") {
    return Promise.reject(new Error("Ngày bắt đầu là cần thiết"));
  } else if (endDate === "") {
    return Promise.reject(new Error("Ngày kết thúc là cần thiết"));
  } else {
    return Promise.resolve();
  }
}
