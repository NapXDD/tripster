"use client";

import { useAppSelector } from "@/lib/hooks";
import ActivityCard from "../card/activityCard";
import DestinationCard from "../card/destinationCard";
import { useEffect, useState } from "react";

interface activityCardData {
  value: JSX.Element;
  date: string;
}

export default function ItineraryListCard({ id }: { id?: string }) {
  const planNumber = useAppSelector(
    (state) => state.planningSelection.value.planNumber
  );
  const newPlan = useAppSelector((state) => state.createPlanning.value);
  const multiplan = useAppSelector(
    (state) => state.multiplanSelect.value.multiplan
  );
  const [data, setData] = useState<activityCardData[]>([]);

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
      console.log(id);
    }
  }, [newPlan, planNumber]);

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
