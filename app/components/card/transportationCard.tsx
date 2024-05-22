import { transport } from "@/app/types/transportation";
import PlanningDetailContentLayout from "../layout/planningDetailContentLayout";

export default function TransportationCard({ data }: { data: transport }) {
  return (
    <PlanningDetailContentLayout>
      <div className="h-auto pb-8" id="transportation">
        <div className="title">
          <div className="pt-8 text-2xl">Phương tiện</div>
          <div className="flex flex-col">
            {"flights" in data ? (
              <>{data.flights[0].airline}</>
            ) : (
              <>{data.name}</>
            )}
          </div>
        </div>
      </div>
    </PlanningDetailContentLayout>
  );
}
