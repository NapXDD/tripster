import { responseAPI } from "../entities/response";
import { UserInfoEntities } from "../entities/user";
import get from "./getAPI";

export async function getUserInfo() {
  const response = await get<responseAPI<UserInfoEntities>>("/users/getInfo");
  if (response.status === "200") {
    return response;
  } else {
    return Error(response.message);
  }
}
