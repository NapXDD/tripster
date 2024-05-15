import BudgetCard from "@/app/components/card/budgetCard";
import ItineraryCard from "@/app/components/card/itineraryCard";
import TripTitle from "@/app/components/card/tripTitle";
import { BASE_URL } from "@/utils/importer";

async function getPlanningById({id} : {id: string}){
  const response = await fetch(`${BASE_URL}/`)
}

export default function PlanningDetail({ params }: { params: { id: string } }) {
  return (
    <>
      <TripTitle title="HCM" />
      <ItineraryCard id={params.id}/>
      <BudgetCard />
    </>
  );
}
