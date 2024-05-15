"use client";

import { useAppSelector } from "@/lib/hooks";
import ListItem from "./listItem";
import ListLayout from "./listLayout";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function InteraryList() {
  const pathName = usePathname();
  const router = useRouter();
  const [dates, setDates] = useState<string[]>([]);
  const newPlan = useAppSelector((state) => state.createPlanning.value);
  const storedPlan = useAppSelector((state) => state.planning.value);

  const getListDate = (startDate: string, endDate: string): string[] => {
    let dates: string[] = [];
    let currentDate = dayjs(startDate, "DD/MM/YYYY");
    let endD = dayjs(endDate, "DD/MM/YYYY");

    while (currentDate.isBefore(endD) || currentDate.isSame(endD, "day")) {
      dates.push(currentDate.format("ddd - DD/MM"));
      currentDate = currentDate.add(1, "day");
    }
    return dates;
  };

  useEffect(() => {
    let listDate: string[] = [];
    if (pathName === "/planningSelection") {
      if (newPlan.startDate === "") {
        router.replace("/");
      }
      listDate = getListDate(newPlan.startDate, newPlan.endDate);
    } else {
      listDate = getListDate(storedPlan.startDate, storedPlan.endDate);
    }
    setDates(listDate);
  }, [pathName]);

  return (
    <ListLayout id="Itinerary" title="Lịch trình">
      <div className="flex flex-col gap-5 mt-5">
        <ListItem data={dates} id="itinerary" />
      </div>
    </ListLayout>
  );
}
