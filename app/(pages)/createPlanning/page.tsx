import { getAllProvinceOption } from "@/utils/api/province";
import CreatePlanningForm from "../../components/form/createPlanningForm/createPlanningForm";
import { activitiesTags, amentitiesTags } from "@/utils/importer";

export default async function CreatePlanning() {
  const provinces = await getAllProvinceOption();
  // const activityTags = await getActivity();
  // const amenityTags = await getAmenities();
  return (
    <div className="flex justify-center items-center flex-col gap-3 mb-4">
      <div className="font-bold text-3xl text-gray-800">
        Tạo kế hoạch cho chuyến đi
      </div>
      <CreatePlanningForm
        activityTags={activitiesTags}
        amenityTags={amentitiesTags}
        destinationData={provinces}
      />
    </div>
  );
}
