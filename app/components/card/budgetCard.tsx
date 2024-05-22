import PlanningDetailContentLayout from "../layout/planningDetailContentLayout";

export default function BudgetCard({ data }: { data: number }) {
  return (
    <PlanningDetailContentLayout>
      <div className="h-auto pb-8" id="budget">
        <div className="title">
          <div className="pt-8 text-2xl">Ngân sách: {data} VND</div>
        </div>
      </div>
    </PlanningDetailContentLayout>
  );
}
