import { activityEntities } from "../entities/lableRecommendation";
import { responseAPI } from "../entities/response";
import { getNoToken } from "./getAPI";

export async function getAmenities() {
  const response = await getNoToken<responseAPI<activityEntities>>(
    "/lables/RcAccommodation"
  );
  return response;
}

export async function getActivity() {
  const response = await getNoToken<responseAPI<activityEntities>>(
    "/lables/RcActivity"
  );
  return response;
}
