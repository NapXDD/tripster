"use client";

import { Divider } from "antd";
import BudgetCard from "./budgetCard";
import ItineraryCard from "./itineraryCard";
import Button from "../button/button";
import { useAppDispatch } from "@/lib/hooks";
import { resetCreatePlanning } from "@/lib/features/createPlanning";

export default function PlanningDetailContentCard() {
  const dispatch = useAppDispatch();

  const handleSavePlan = () => {
    //save api here
    dispatch(resetCreatePlanning());
  };

  return (
    <div>
      <ItineraryCard />
      <Divider />
      <BudgetCard />
      <Divider />
      <Button onClick={handleSavePlan} className="mb-7 py-1 ml-6">
        Lưu
      </Button>
    </div>
  );
}
