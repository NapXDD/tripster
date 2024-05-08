import BudgetInput from "../components/input/budgetInput";
import DestinationInput from "../components/input/destinationInput";
import TimeInput from "../components/input/timeInput";
import TransportationInput from "../components/input/transportationInput";

export default function CreatePlanning() {
  return (
    <div className="flex justify-center items-cente">
      <div className="w-[60%] bg-gray-200 p-5 rounded-lg flex flex-col gap-2">
        <div className="flex flex-col">
          <div className="font-bold mb-1">Chọn phương tiện</div>
          <TransportationInput />
        </div>
        <div className="flex flex-col">
          <div className="font-bold mb-1">Ngân sách</div>
          <BudgetInput />
        </div>
        <div className="flex flex-col static">
          <div className="font-bold mb-1">Thời gian</div>
          <TimeInput />
        </div>
        <div className="flex flex-col">
          <div className="font-bold mb-1">Điểm đến</div>
          <DestinationInput />
        </div>
      </div>
    </div>
  );
}
