import ItineraryListCard from "../list/itineraryListCard";
import PlanningDetailContentLayout from "../layout/planningDetailContentLayout";
import { PlanDetailEntity } from "@/utils/entities/plan";
import { responseAPI } from "@/utils/entities/response";

export default function ItineraryCard({
  id,
  data,
}: {
  id?: string;
  data?: responseAPI<PlanDetailEntity>;
}) {
  return (
    <PlanningDetailContentLayout>
      <div className="h-auto pb-8" id="itinerary">
        <div className="title">
          <div className="pt-8 text-2xl pb-4">Lịch trình</div>
        </div>
        <ItineraryListCard id={id} planDetail={data} />
      </div>
    </PlanningDetailContentLayout>
  );
}
