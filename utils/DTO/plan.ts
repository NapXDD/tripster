import { transportation } from "@/app/types/transportation";

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
  transport: {
    price: number;
    type: "flight" | "coach";
    name: string;
    start_time: string;
    end_time: string;
  };
}

export interface PlanDetailDTO {
  idPlan: number;
}

export type DeletePlanDTO = PlanDetailDTO;
