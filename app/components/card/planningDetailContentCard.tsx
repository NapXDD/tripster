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
import { SavePlanDTO, SavePlanTranportDTO } from "@/utils/DTO/plan";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { addCommaToNumber } from "@/utils/function/addCommas";

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
  const currentUser = useAppSelector((state) => state.user.value.user);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [transport, setTransport] = useState<SavePlanTranportDTO>({
    duration: "",
    end_time: "",
    price: 0,
    name: "",
    start_time: "",
    type: "coach",
  });

  const handleSavePlan = async () => {
    //save api here
    setIsLoading(true);
    if (rawPlanData !== null) {
      const rawData = rawPlanData.messageData.detailPlans[planNumber];
      const activitiesId = rawData.activities.map((item) => item.id.toString());
      const hotel = rawData.hotel.id.toString();
      const messageData = rawPlanData.messageData;
      let transport: SavePlanTranportDTO = {
        duration:
          "flights" in rawData.transport
            ? rawData.transport.total_duration.toString()
            : rawData.transport.duration.toString(),
        price: rawData.transport.price,
        end_time:
          "flights" in rawData.transport
            ? rawData.transport.flights[0].arrival_airport.time
            : null,
        start_time:
          "flights" in rawData.transport
            ? rawData.transport.flights[0].departure_airport.time
            : null,
        name:
          "flights" in rawData.transport
            ? rawData.transport.flights[0].airline
            : rawData.transport.name,
        type: "flights" in rawData.transport ? "flight" : "coach",
      };
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
        const res = await savePlan(data, currentUser.token);
        if (res.status === "200") {
          setIsLoading(false);
          toast.success("Tạo plan thành công");
          router.push(`/profile/${currentUser.id}`);
          dispatch(resetRawPlan());
          dispatch(resetMultiplan());
          dispatch(resetCreatePlanning());
        }
      } catch (e) {
        setIsLoading(false);
        throw e;
      }
    }
  };

  useEffect(() => {
    if (rawPlanData !== null) {
      const rawData = rawPlanData.messageData.detailPlans[planNumber];
      let transport: SavePlanTranportDTO = {
        duration:
          "flights" in rawData.transport
            ? rawData.transport.total_duration.toString()
            : rawData.transport.duration.toString(),
        price: rawData.transport.price,
        end_time:
          "flights" in rawData.transport
            ? rawData.transport.flights[0].arrival_airport.time
            : null,
        start_time:
          "flights" in rawData.transport
            ? rawData.transport.flights[0].departure_airport.time
            : null,
        name:
          "flights" in rawData.transport
            ? rawData.transport.flights[0].airline
            : rawData.transport.name,
        type: "flights" in rawData.transport ? "flight" : "coach",
      };
      setTransport(transport);
    }
  }, []);

  return (
    <div className="relative">
      <BudgetCard data={addCommaToNumber(budget)} />
      <Divider />
      <ItineraryCard />
      <Divider />
      <HotelCard data={multiplan ? multiplan[planNumber].hotel : undefined} />
      <Divider />
      <TransportationCard
        data={rawPlanData?.messageData.detailPlans[planNumber].transport}
      />
      <Divider />
      <Button
        isLoading={isLoading}
        type="theme"
        onClick={handleSavePlan}
        className="mb-7 py-1 ml-6"
      >
        Lưu
      </Button>
    </div>
  );
}
