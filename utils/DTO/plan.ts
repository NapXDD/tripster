import {
  transport,
  transportTypeCoach,
  transportation,
} from "@/app/types/transportation";

export interface checkValidFlightDTO {
  departure: string;
  arrival: string;
}

export interface CreatePlanDTO {
  types: string[];
  amenities_input: number[];
  budget: number;
  start_day: string;
  end_day: string;
  start_point: string;
  end_point: string;
  type_transport: transportation;
}

export interface SavePlanDTO {
  start_day: string;
  end_day: string;
  budget: string;
  start_point: string;
  end_point: string;
  activities: string[];
  hotel: string;
  transport: SavePlanTranportDTO;
}

export interface SavePlanTranportDTO {
  price: number;
  type: "coach" | "flight";
  name: string;
  start_time: null | string;
  end_time: null | string;
  duration: string;
}

export interface PlanDetailDTO {
  idPlan: string;
  idUser: string;
}

export interface DeletePlanDTO {
  idPlan: string;
}
