import { activityEntities } from "../entities/lableRecommendation";
import { responseAPI } from "../entities/response";
import get from "./getAPI";

export async function getAccommodation() {}

export async function getActivity() {
  const response = await get<responseAPI<activityEntities>>(
    "/lables/RcActivity"
  );
  if (response.status === "200") {
    return response;
  } else {
    return Error(response.message);
  }
}


