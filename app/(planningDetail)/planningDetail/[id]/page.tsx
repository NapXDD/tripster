import BudgetCard from "@/app/components/card/budgetCard";
import HotelCard from "@/app/components/card/hotelCard";
import ItineraryCard from "@/app/components/card/itineraryCard";
import TransportationCard from "@/app/components/card/transportationCard";
import TripTitle from "@/app/components/card/tripTitle";
import { getPlanDetail } from "@/utils/api/plan";
import { getSession } from "next-auth/react";

export default async function PlanningDetail({
  params,
}: {
  params: { id: string };
}) {
  const session = await getSession();
  if (session) {
    const res = await getPlanDetail(
      { idPlan: params.id.split('-')[0], idUser: params.id.split('-')[1] },
      session?.user.token
    );
    if (res) {
      return (
        <>
          <TripTitle title="HCM" />
          <ItineraryCard id={params.id} />
          <BudgetCard data={res.messageData.plan.budget} />
          <HotelCard data={res.messageData.accommodation[0]} />
          <TransportationCard data={res.messageData.transport} />
        </>
      );
    }
  }
}
