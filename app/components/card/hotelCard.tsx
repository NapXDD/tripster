import { hotel } from "@/app/types/plan";
import PlanningDetailContentLayout from "../layout/planningDetailContentLayout";

export default function HotelCard({ data }: { data: hotel }) {
  return (
    <PlanningDetailContentLayout>
      <div className="h-auto pb-8" id="hotel">
        <div className="title">
          <div className="pt-8 text-2xl">Khách sạn</div>
          <div className="flex flex-col">
            <div>{data.name}</div>
            <div>{data.address}</div>
            <div>{data.price}</div>
            <div>{data.rating}</div>
          </div>
        </div>
      </div>
    </PlanningDetailContentLayout>
  );
}
