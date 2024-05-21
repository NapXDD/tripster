import { transport } from "./transportation";

export interface activity {
  id: number;
  name: string;
  rating: number;
  num_comment: number;
  price: number;
  image: string;
  address: string;
  distance: string;
  type_activity: string;
  openTime: string;
  closeTime: string;
}

export interface hotel {
  id: number;
  name: string;
  price: number;
  rating: number;
  address: string;
}

export interface DetailPlan {
  activities: activity[];
  hotel: hotel;
  transport: transport;
}

export type DetailPlans = DetailPlan[];
