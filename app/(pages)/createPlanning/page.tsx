import get from "@/utils/api/getAPI";
import CreatePlanningForm from "../../components/form/createPlanningForm/createPlanningForm";
import { destination } from "@/app/type/destination";

async function getAllProvince() {
  const response = await get<destination[]>(
    "https://vietnam-administrative-division-json-server-swart.vercel.app/province"
  );
  return response;
}

export default async function CreatePlanning() {
  const provinces = await getAllProvince();
  return (
    <div className="flex justify-center items-center flex-col gap-3 mb-4">
      <div className="font-bold text-3xl text-gray-800">
        Tạo kế hoạch cho chuyến đi
      </div>
      <CreatePlanningForm destinationData={provinces} />
    </div>
  );
}
