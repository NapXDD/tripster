import { GetUserInfoDTO, UpdateUserDTO } from "../DTO/user";
import { responseAPI } from "../entities/response";
import { UpdateUserEntity, UserInfoEntities } from "../entities/user";
import get from "./getAPI";
import patch from "./patchAPI";

export async function getUserInfo(userId: string, accessToken: string) {
  const response = await get<UserInfoEntities>(
    `/users/getInfo/${userId}`,
    accessToken
  );
  return response;
}

export async function updateUserInfo(body: FormData, accessToken: string) {
  const response = await patch<responseAPI<UpdateUserEntity>>(
    "/users/updateInfo",
    body,
    accessToken
  );
  return response;
}
