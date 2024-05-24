"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import ActivityCard from "../card/activityCard";
import DestinationCard from "../card/destinationCard";
import { useEffect, useState } from "react";
import { PlanDetailEntity, plan } from "@/utils/entities/plan";
import { setupSinglePlan } from "@/utils/function/setupPlan";
import { responseAPI } from "@/utils/entities/response";
import { setMultiplan } from "@/lib/features/multiplan";
import { getListDate } from "@/utils/function/getListDate";
import dayjs from "dayjs";
import { list } from "postcss";
import { message } from "antd";

interface activityCardData {
  value: JSX.Element;
  date: string;
}

export default function ItineraryListCard({
  id,
  planDetail,
}: {
  id?: string;
  planDetail?: responseAPI<PlanDetailEntity>;
}) {
  const planNumber = useAppSelector(
    (state) => state.planningSelection.value.planNumber
  );
  const newPlan = useAppSelector((state) => state.createPlanning.value);
  const multiplan = useAppSelector(
    (state) => state.multiplanSelect.value.multiplan
  );
  const [data, setData] = useState<activityCardData[]>([]);
  const dispatch = useAppDispatch();

  //if id is not define, it mean this list is from create plan, then we set the create planning reducer
  useEffect(() => {
    if (id === undefined) {
      let dataList: activityCardData[] = [];
      newPlan.listDate.forEach((date) => {
        let data = {
          value: (
            <DestinationCard
              data={
                multiplan === null
                  ? null
                  : multiplan[planNumber].activities[date]
              }
            />
          ),
          date: date,
        };
        dataList.push(data);
      });
      setData(dataList);
    } else {
      const newData = structuredClone(planDetail);
      if (newData) {
        const singlePlanDetail = setupSinglePlan(newData);
        dispatch(setMultiplan([singlePlanDetail]));
      }
    }
  }, [newPlan, planNumber]);

  useEffect(() => {
    if (planDetail) {
      const newDetail = structuredClone(planDetail);
      let startDate = newDetail.messageData.plan.start_day.split("T")[0];
      let endDate = newDetail.messageData.plan.end_day.split("T")[0];
      startDate = dayjs(startDate, "YYYY-MM-DD").format("DD/MM/YYYY");
      endDate = dayjs(endDate, "YYYY-MM-DD").format("DD/MM/YYYY");
      const listDate = getListDate(startDate, endDate);
      let dataList: activityCardData[] = [];
      listDate.forEach((date) => {
        let data = {
          value: (
            <DestinationCard
              data={multiplan === null ? null : multiplan[0].activities[date]}
            />
          ),
          date: date,
        };
        dataList.push(data);
      });
      setData([...dataList]);
    }
  }, [multiplan]);

  return (
    <div className="flex flex-col gap-8">
      {data.map((item, index) => (
        <ActivityCard
          key={index + "itinerary"}
          content={item.value}
          date={data[index].date}
          keyId={index.toString()}
        />
      ))}
    </div>
  );
}
