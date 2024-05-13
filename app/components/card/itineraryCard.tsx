import ItineraryListCard from "../list/itineraryListCard";
import PlanningDetailContentLayout from "../layout/planningDetailContentLayout";

export default function ItineraryCard() {
  return (
    <PlanningDetailContentLayout>
      <div className="h-screen" id="itinerary">
        <div className="title">
          <div className="pt-2">Itinerary</div>
        </div>
        <ItineraryListCard />
      </div>
    </PlanningDetailContentLayout>
  );
}
