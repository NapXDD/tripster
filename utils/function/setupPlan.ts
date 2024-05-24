import dayjs from "dayjs";
import { CreatePlanEntity, PlanDetailEntity } from "../entities/plan";
import { getListDate } from "./getListDate";
import { activity, hotel } from "@/app/types/plan";
import { responseAPI } from "../entities/response";
import { transport } from "@/app/types/transportation";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

type DateRecord = Record<string, activity[]>;

type PlansActivities = Record<string, activity[]>[];

export interface plan {
  hotel: hotel;
  activities: Record<string, activity[]>;
  transport: transport;
  total: number;
}

export function setupPlan(data: responseAPI<CreatePlanEntity>) {
  const newData = structuredClone(data);
  const messageData = newData.messageData;
  const detailPlans = messageData.detailPlans;
  const startDay = dayjs(messageData.start_day, "YYYY-MM-DD").format(
    "DD/MM/YYYY"
  );
  const endDay = dayjs(messageData.end_day, "YYYY-MM-DD").format("DD/MM/YYYY");
  let plansActivities: PlansActivities = [];
  const listDate = getListDate(startDay, endDay);
  const length = detailPlans.length;
  const dateObject: DateRecord = listDate.reduce(
    (acc: DateRecord, date: string) => {
      acc[date] = [];
      return acc;
    },
    {}
  );
  const newdetailPlans = [...detailPlans];
  for (let i = 0; i < length; i++) {
    const newDateObject = structuredClone(dateObject);
    plansActivities[i] = newDateObject;
  }
  plansActivities.forEach((item, index) => {
    let i = index;
    for (let key in item) {
      let newActivities = newdetailPlans[i].activities;
      const activities = newActivities.splice(0, 3);
      plansActivities[i][key] = [...activities];
    }
  });
  let plan: plan[] = [];
  for (let i = 0; i < length; i++) {
    let data: plan = {
      hotel: detailPlans[i].hotel,
      activities: plansActivities[i],
      total: detailPlans[i].total,
      transport: detailPlans[i].transport,
    };
    plan.push(data);
  }
  return plan;
}

//because of the object difference structure of multiplan and a single plan, so I have to copy the function and modify it
//to reuse the multiplan reducer
export function setupSinglePlan(data: responseAPI<PlanDetailEntity>) {
  const newData = structuredClone(data);
  const messageData = newData.messageData;
  const detailPlans = messageData.activity;
  let startDay = messageData.plan.start_day.split("T")[0];
  let endDay = messageData.plan.end_day.split("T")[0];
  startDay = dayjs(startDay, "YYYY-MM-DD").format("DD/MM/YYYY");
  endDay = dayjs(endDay, "YYYY-MM-DD").format("DD/MM/YYYY");
  let plansActivities: PlansActivities = [];
  const listDate = getListDate(startDay, endDay);
  const length = 1;
  const dateObject: DateRecord = listDate.reduce(
    (acc: DateRecord, date: string) => {
      acc[date] = [];
      return acc;
    },
    {}
  );
  const newdetailPlans = structuredClone(detailPlans);
  for (let i = 0; i < length; i++) {
    const newDateObject = structuredClone(dateObject);
    plansActivities[i] = newDateObject;
  }
  plansActivities.forEach((item, index) => {
    let i = index;
    for (let key in item) {
      let newActivities = newdetailPlans;
      const activities = newActivities.splice(0, 3);
      plansActivities[i][key] = [...activities];
    }
  });
  let plan: plan = {
    activities: plansActivities[0],
    hotel: messageData.accommodation[0],
    total: messageData.plan.budget,
    transport: messageData.transport[0],
  };
  return plan;
}
