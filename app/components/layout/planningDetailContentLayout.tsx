export default function PlanningDetailContentLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="w-full bg-white">
      <div className="my-2 ml-6">{children}</div>
    </div>
  );
}
