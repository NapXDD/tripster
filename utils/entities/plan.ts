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
  end_point: string;
  start_point: string;
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

export interface TransportResult {
  id: number;
  price: number;
  type: "flight" | "coach";
  name: string;
  start_time: string | null;
  end_time: string | null;
  duration: string;
}

export interface PlanDetailEntity {
  plan: plan;
  activity: activity[];
  accommodation: hotel[];
  transport: TransportResult[];
}

export interface DeletePlanEntity {}
