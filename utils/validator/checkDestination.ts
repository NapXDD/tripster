export default function checkDestination(destination: string) {
  if (destination === "") {
    return Promise.reject(new Error("Điểm đến là cần thiết"));
  } else {
    return Promise.resolve();
  }
}
