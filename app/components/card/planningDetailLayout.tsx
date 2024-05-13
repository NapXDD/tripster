export default function PlanningDetailLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="w-full bg-white">
      <div className="mt-2 ml-6">{children}</div>
    </div>
  );
}
