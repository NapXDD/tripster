"use client";

import { Tabs, TabsProps } from "antd";
import PlanningDetailContentCard from "../card/planningDetailContentCard";
import TripTitle from "../card/tripTitle";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setPlanNumber } from "@/lib/features/planningSelection";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PlanningDetailTab() {
  const dispatch = useAppDispatch();
  const multiplan = useAppSelector(
    (state) => state.multiplanSelect.value.multiplan
  );
  const newPlan = useAppSelector((state) => state.createPlanning.value);
  const [items, setItems] = useState<TabsProps["items"]>([]);
  const router = useRouter();

  const handleSwitchPlan = (key: string) => {
    dispatch(setPlanNumber(parseInt(key)));
  };

  useEffect(() => {
    if (multiplan === null) {
      router.replace("/");
    }
  }, []);

  useEffect(() => {
    if (multiplan !== null && items) {
      const newItem = [
        {
          key: "0",
          label: "Most Recommend",
          children: <PlanningDetailContentCard data={multiplan[0]} />,
        },
        {
          key: "1",
          label: "Plan 2",
          children: <PlanningDetailContentCard data={multiplan[1]} />,
        },
        {
          key: "2",
          label: "Plan 3",
          children: <PlanningDetailContentCard data={multiplan[2]} />,
        },
      ];
      setItems([...newItem]);
    }
  }, [multiplan]);

  return (
    <div className="flex flex-col">
      <div className="mt-2 ml-36 rounded-lg bg-white md:mx-2">
        <TripTitle title={newPlan.destination.name} />
      </div>
      <div className="bg-white ml-36 my-2 px-4 rounded-lg md:mx-2">
        <Tabs onChange={handleSwitchPlan} defaultActiveKey="1" items={items} />
      </div>
    </div>
  );
}
