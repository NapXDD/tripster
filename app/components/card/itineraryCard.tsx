import ItineraryListCard from "../list/itineraryListCard";
import PlanningDetailContentLayout from "../layout/planningDetailContentLayout";

export default function ItineraryCard({ id }: { id?: string }) {
  return (
    <PlanningDetailContentLayout>
      <div className="h-auto pb-8" id="itinerary">
        <div className="title">
          <div className="pt-8 text-2xl pb-4">Lịch trình</div>
        </div>
        <ItineraryListCard />
      </div>
    </PlanningDetailContentLayout>
  );
}
