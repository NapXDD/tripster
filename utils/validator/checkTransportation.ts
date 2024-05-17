export default function checkTransportation(transportation: string | null) {
  if (transportation === "") {
    return Promise.reject(new Error("Phương tiện di chuyển là cần thiết"));
  } else {
    return Promise.resolve();
  }
}
