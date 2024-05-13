import { Divider } from "antd";
import BudgetCard from "./budgetCard";
import ItineraryCard from "./itineraryCard";
import Button from "../button/button";

export default function PlanningDetailContentCard() {
  return (
    <div>
      <ItineraryCard />
      <Divider />
      <BudgetCard />
      <Divider />
      <Button className="mb-7 py-1">Save</Button>
    </div>
  );
}
