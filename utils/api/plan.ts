import {
  CreatePlanDTO,
  DeletePlanDTO,
  PlanDetailDTO,
  SavePlanDTO,
  checkValidFlightDTO,
} from "../DTO/plan";
import {
  CreatePlanEntity,
  DeletePlanEntity,
  GetUserPlansEntity,
  PlanDetailEntity,
  SavePlanEntity,
  ViewRecentEntity,
  checkValidFlightEntity,
} from "../entities/plan";
import get, { getNoToken } from "./getAPI";
import post from "./postAPI";

export async function checkValidFlight(
  body: checkValidFlightDTO,
  accessToken: string
) {
  const response = await post<checkValidFlightDTO, checkValidFlightEntity>(
    "/plan/checkValid",
    body,
    accessToken
  );
  return response;
}

export async function createPlan(body: CreatePlanDTO, accessToken: string) {
  const response = await post<CreatePlanDTO, CreatePlanEntity>(
    "/plan/create",
    body,
    accessToken
  );
  return response;
}

export async function getUserPlans(userId: string, tag?: string) {
  const response = await getNoToken<GetUserPlansEntity>(
    `/plan/user/${userId}`,
    tag
  );
  return response;
}

export async function topFourRecent(accessToken: string) {
  const response = await get<ViewRecentEntity>("/plan/viewRecent", accessToken);
  return response;
}

export async function savePlan(body: SavePlanDTO, accessToken: string) {
  const response = await post<SavePlanDTO, SavePlanEntity>(
    "/plan/save",
    body,
    accessToken
  );
  return response;
}

export async function getPlanDetail(body: PlanDetailDTO, accessToken: string) {
  const response = await post<PlanDetailDTO, PlanDetailEntity>(
    "/plan/detail",
    body,
    accessToken
  );
  return response;
}

export async function deletePlan(body: DeletePlanDTO, accessToken: string) {
  const response = await post<DeletePlanDTO, DeletePlanEntity>(
    "/plan/hidden",
    body,
    accessToken
  );
  return response;
}
