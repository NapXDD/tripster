"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import ListItem from "./listItem";
import ListLayout from "./listLayout";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { setListDate } from "@/lib/features/createPlanning";
import { getListDate } from "@/utils/getListDate";

export default function InteraryList() {
  const pathName = usePathname();
  const router = useRouter();
  const [dates, setDates] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const newPlan = useAppSelector((state) => state.createPlanning.value);
  const storedPlan = useAppSelector((state) => state.planning.value);

  useEffect(() => {
    let listDate: string[] = [];
    if (pathName === "/planningSelection") {
      if (newPlan.startDate === "") {
        router.replace("/");
      }
      listDate = getListDate(newPlan.startDate, newPlan.endDate);
      dispatch(setListDate(listDate));
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
