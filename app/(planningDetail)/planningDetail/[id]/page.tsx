import BudgetCard from "@/app/components/card/budgetCard";
import ItineraryCard from "@/app/components/card/itineraryCard";
import TripTitle from "@/app/components/card/tripTitle";

export default function PlanningDetail({ params }: { params: { id: string } }) {
  return (
    <>
      <TripTitle title="HCM" />
      <ItineraryCard id={params.id}/>
      <BudgetCard />
    </>
  );
}
