"use client";

import { Divider } from "antd";
import BudgetCard from "./budgetCard";
import ItineraryCard from "./itineraryCard";
import Button from "../button/button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { resetCreatePlanning } from "@/lib/features/createPlanning";
import { plan } from "@/utils/function/setupPlan";
import { resetMultiplan } from "@/lib/features/multiplan";
import HotelCard from "./hotelCard";
import TransportationCard from "./transportationCard";
import { resetRawPlan } from "@/lib/features/rawCreatePlan";
import { savePlan } from "@/utils/api/plan";
import { SavePlanDTO } from "@/utils/DTO/plan";
import { useRouter } from "next/navigation";

export default function PlanningDetailContentCard({ data }: { data?: plan }) {
  const dispatch = useAppDispatch();
  const rawPlanData = useAppSelector(
    (state) => state.rawPlanData.value.rawPlanData
  );
  const multiplan = useAppSelector(
    (state) => state.multiplanSelect.value.multiplan
  );
  const planNumber = useAppSelector(
    (state) => state.planningSelection.value.planNumber
  );
  const budget = useAppSelector((state) => state.createPlanning.value.budget);
  const token = useAppSelector((state) => state.user.value.user.token);
  const router = useRouter();

  const handleSavePlan = async () => {
    //save api here
    if (rawPlanData !== null) {
      const rawData = rawPlanData.messageData.detailPlans[planNumber];
      const activitiesId = rawData.activities.map((item) => item.id.toString());
      const hotel = rawData.hotel.id.toString();
      const messageData = rawPlanData.messageData;
      let transport = rawData.transport;
      const data: SavePlanDTO = {
        start_day: messageData.start_day,
        end_day: messageData.end_day,
        activities: activitiesId,
        budget: budget.toString(),
        end_point: messageData.end_point,
        hotel: hotel,
        start_point: messageData.start_point,
        transport: transport,
      };
      try {
        const res = await savePlan(data, token);
        if (res.status === "200") {
          router.push(`/planningDetail/${res.messageData.planId}`);
          dispatch(resetRawPlan());
          dispatch(resetMultiplan());
          dispatch(resetCreatePlanning());
        }
      } catch (e) {
        throw e;
      }
    }
  };

  return (
    <div className="relative">
      <ItineraryCard />
      <Divider />
      <BudgetCard data={multiplan![planNumber].total} />
      <Divider />
      <HotelCard data={multiplan![planNumber].hotel} />
      <Divider />
      <TransportationCard data={multiplan![planNumber].transport} />
      <Divider />
      <Button type="theme" onClick={handleSavePlan} className="mb-7 py-1 ml-6">
        Lưu
      </Button>
    </div>
  );
}
