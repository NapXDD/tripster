"use client";

import { Tabs, TabsProps } from "antd";
import PlanningDetailContentCard from "../card/planningDetailContentCard";
import TripTitle from "../card/tripTitle";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setPlanNumber } from "@/lib/features/planningSelection";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Most Recommend",
    children: <PlanningDetailContentCard />,
  },
  {
    key: "2",
    label: "Plan 2",
    children: <PlanningDetailContentCard />,
  },
  {
    key: "3",
    label: "Plan 3",
    children: <PlanningDetailContentCard />,
  },
];

export default function PlanningDetailTab() {
  const dispatch = useAppDispatch();

  const handleSwitchPlan = (key: string) => {
    dispatch(setPlanNumber(key));
  };

  return (
    <div className="flex flex-col">
      <div className="mt-2 mx-2 rounded-lg bg-white">
        <TripTitle title="HCM" />
      </div>
      <div className="bg-white m-2 px-2 rounded-lg">
        <Tabs onChange={handleSwitchPlan} defaultActiveKey="1" items={items} />
      </div>
    </div>
  );
}
