import BudgetCard from "@/app/components/card/budgetCard";
import InteraryCard from "@/app/components/card/interaryCard";
import TripTitle from "@/app/components/card/tripTitle";
import Footer from "@/app/components/footer";

export default function PlanningDetail({ params }: { params: { id: string } }) {
  return (
    <div className="w-[75%] mt-[5rem] bg-gray-200 ml-[25%] lg:w-[85%] lg:ml-[15%]">
      <TripTitle />
      <InteraryCard />
      <BudgetCard />
      <Footer />
    </div>
  );
}
