import BudgetInput from "../components/input/budgetInput";
import DestinationInput from "../components/input/destinationInput";
import SelectTagInput from "../components/input/selectTagInput";
import TimeInput from "../components/input/timeInput";
import TransportationInput from "../components/input/transportationInput";
import { Tag } from "../type/tag";

const activitiesTags: Tag[] = [
  { title: "act 1", value: "act1" },
  { title: "act 2", value: "act2" },
  { title: "act 3", value: "act3" },
  { title: "act 4", value: "act4" },
  { title: "act 5", value: "act5" },
  { title: "act 6", value: "act6" },
];

const amentitiesTags: Tag[] = [
  { title: "ame 1", value: "ame1" },
  { title: "ame 2", value: "ame2" },
  { title: "ame 3", value: "ame3" },
  { title: "ame 4", value: "ame4" },
  { title: "ame 5", value: "ame5" },
  { title: "ame 6", value: "ame6" },
];

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
        <div className="flex flex-col">
          <div className="font-bold mb-1">Hoạt động</div>
          <SelectTagInput data={activitiesTags} type="activities" />
        </div>
        <div className="flex flex-col">
          <div className="font-bold mb-1">tiện ích, dịch vụ</div>
          <SelectTagInput data={amentitiesTags} type="amentities" />
        </div>
      </div>
    </div>
  );
}
