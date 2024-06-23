"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import ListItem from "./listItem";
import ListLayout from "./listLayout";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { setDate, setListDate } from "@/lib/features/createPlanning";
import { getListDate } from "@/utils/function/getListDate";

export default function InteraryList() {
  const pathName = usePathname();
  const [dates, setDates] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const newPlan = useAppSelector((state) => state.createPlanning.value);
  const storedPlan = useAppSelector(
    (state) => state.multiplanSelect.value.multiplan
  );

  useEffect(() => {
    let listDate: string[] = [];
    if (pathName === "/planningSelection") {
      listDate = getListDate(newPlan.startDate, newPlan.endDate);
      dispatch(setListDate(listDate));
    } else {
      if (storedPlan !== null) {
        for (let date in storedPlan[0].activities) {
          listDate.push(date);
        }
      }
    }
    setDates(listDate);
  }, [pathName]);

  useEffect(() => {
    let dateList = [];
    if (storedPlan !== null) {
      for (let date in storedPlan[0].activities) {
        dateList.push(date);
      }
      setDates(dateList);
    }
  }, [storedPlan]);

  return (
    <ListLayout id="Itinerary" title="Lịch trình">
      <div className="flex flex-col gap-5 mt-5">
        <ListItem data={dates} id="itinerary" />
      </div>
    </ListLayout>
  );
}
