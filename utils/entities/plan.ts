import { DetailPlans, activity, hotel } from "@/app/types/plan";
import { transport } from "@/app/types/transportation";

export type checkValidFlightEntity = boolean;

export interface CreatePlanEntity {
  start_day: string;
  end_day: string;
  start_point: string;
  end_point: string;
  detailPlans: DetailPlans;
}

export interface plan {
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

export type ViewRecentEntity = GetUserPlansEntity;

export interface SavePlanEntity {
  planId: string;
}

export interface PlanDetailEntity {
  plan: plan;
  activity: activity[];
  accommodation: hotel[];
  transport: transport;
}

export interface DeletePlanEntity {}
