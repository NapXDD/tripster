import { destination } from "@/app/types/destination";
import { checkValidFlight } from "../api/plan";
import removeProvincePrefix from "../function/getProvince";

export default function checkTransportation(
  startPoint: destination,
  destination: destination,
  transportation: "coach" | "flight",
  accessToken: string
) {
  console.log("lmao");
  if (transportation === "flight") {
    const fetchData = async () => {
      const res = await checkValidFlight(
        {
          departure: removeProvincePrefix(startPoint.name),
          arrival: removeProvincePrefix(destination.name),
        },
        accessToken
      );
      if (res.status === "200") {
        return res.messageData;
      }
    };
    fetchData().then((res) => {
      if (res) {
        if (res === true) {
          return Promise.resolve();
        } else {
          return Promise.reject(
            `Không có chuyến bay từ ${startPoint.name} đến ${destination.name}`
          );
        }
      }
    });
  } else {
    return Promise.resolve();
  }
}
