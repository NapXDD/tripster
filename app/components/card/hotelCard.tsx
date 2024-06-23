import { hotel } from "@/app/types/plan";
import PlanningDetailContentLayout from "../layout/planningDetailContentLayout";
import { addCommaToNumber } from "@/utils/function/addCommas";

export default function HotelCard({ data }: { data?: hotel }) {
  return (
    <PlanningDetailContentLayout>
      <div className="h-auto pb-8" id="hotel">
        <div className="title">
          <div className="pt-8 text-2xl">Khách sạn</div>
          {data ? (
            <div className="flex flex-col">
              <div>Tên khách sạn: {data.name}</div>
              <div>Địa chỉ: {data.address}</div>
              <div>Giá tiền: {addCommaToNumber(data.price)} VND</div>
              <div>Rating: {data.rating}</div>
            </div>
          ) : null}
        </div>
      </div>
    </PlanningDetailContentLayout>
  );
}
