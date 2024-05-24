import BudgetCard from "@/app/components/card/budgetCard";
import HotelCard from "@/app/components/card/hotelCard";
import ItineraryCard from "@/app/components/card/itineraryCard";
import TransportationCard from "@/app/components/card/transportationCard";
import TripTitle from "@/app/components/card/tripTitle";
import { transport } from "@/app/types/transportation";
import { getUserSession } from "@/lib/session";
import { getPlanDetail } from "@/utils/api/plan";
import { addCommaToNumber } from "@/utils/function/addCommas";
import { revalidatePath } from "next/cache";

export default async function PlanningDetail({
  params,
}: {
  params: { id: string };
}) {
  revalidatePath(`/planningDetail/${params.id}`, "page");
  const session = await getUserSession();
  if (session) {
    const res = await getPlanDetail(
      { idPlan: params.id.split("-")[0], idUser: params.id.split("-")[1] },
      session?.user.token
    );
    if (res) {
      return (
        <div className="ml-2">
          <TripTitle title={res.messageData.plan.end_point} />
          <BudgetCard data={addCommaToNumber(res.messageData.plan.budget)} />
          <ItineraryCard data={res} id={params.id} />
          <HotelCard data={res.messageData.accommodation[0]} />
          <TransportationCard data={res.messageData} />
        </div>
      );
    }
  }
}
