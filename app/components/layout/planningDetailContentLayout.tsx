export default function PlanningDetailContentLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="w-full bg-white rounded-lg">
      <div className="my-2 mx-6 ">{children}</div>
    </div>
  );
}
