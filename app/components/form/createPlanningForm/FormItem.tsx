export default function FormItem({
  label,
  children,
  required,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-semibold mb-1">
        <div className="flex">
          {required && <span className="text-red-500 mr-2">*</span>}
          <div className="text-base">{label}</div>
        </div>
      </div>
      {children}
    </div>
  );
}
