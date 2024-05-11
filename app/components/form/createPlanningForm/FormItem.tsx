export default function FormItem({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div className="font-semibold mb-1">{label}</div>
      {children}
    </div>
  );
}
