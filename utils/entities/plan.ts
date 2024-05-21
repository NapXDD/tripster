import { DetailPlans, activity, hotel } from "@/app/types/plan";

export type checkValidFlightEntity = boolean;

export interface CreatePlanEntity {
  start_day: string;
  end_day: string;
  start_point: string;
  end_point: string;
  detailPlans: DetailPlans;
}

interface plan {
  id: number;
  budget: number;
  id_user: number;
  destination: string;
  start_day: string;
  end_day: string;
  id_transport: number;
  isViewed: number;
  viewedAt: string;
  createAt: string;
}

export interface GetUserPlansEntity {
  plan: plan[];
}

interface ViewRecent {
  id: number;
  start_point: string;
  end_point: string;
  start_day: string;
  end_day: string;
}

export type ViewRecentEntity = ViewRecent[];

export interface SavePlanEntity {}

export interface PlanDetailEntity {
  plan: plan;
  activity: activity[];
  accommodation: hotel[];
}

export interface DeletePlanEntity {}
