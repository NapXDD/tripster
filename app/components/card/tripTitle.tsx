import PlanningDetailContentLayout from "../layout/planningDetailContentLayout";

export default function TripTitle({ title }: { title: string }) {
  return (
    <PlanningDetailContentLayout>
      <div className="h-16 flex items-center title">Trip to {title}</div>
    </PlanningDetailContentLayout>
  );
}
