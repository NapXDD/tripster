import ItineraryListCard from "../list/itineraryListCard";
import PlanningDetailLayout from "./planningDetailLayout";

export default function ItineraryCard() {
  return (
    <PlanningDetailLayout>
      <div className="h-screen" id="itinerary">
        <div className="title">
          <div className="pt-2">Itinerary</div>
        </div>
        <ItineraryListCard />
      </div>
    </PlanningDetailLayout>
  );
}
