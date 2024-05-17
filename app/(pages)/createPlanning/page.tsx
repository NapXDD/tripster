import { getAllProvinceOption } from "@/utils/api/province";
import CreatePlanningForm from "../../components/form/createPlanningForm/createPlanningForm";

export default async function CreatePlanning() {
  const provinces = await getAllProvinceOption();
  return (
    <div className="flex justify-center items-center flex-col gap-3 mb-4">
      <div className="font-bold text-3xl text-gray-800">
        Tạo kế hoạch cho chuyến đi
      </div>
      <CreatePlanningForm destinationData={provinces} />
    </div>
  );
}
