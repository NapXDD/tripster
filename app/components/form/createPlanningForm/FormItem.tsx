import { QuestionCircleFilled } from "@ant-design/icons";
import { Popover } from "antd";

export default function FormItem({
  label,
  children,
  required,
  note,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  note?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-semibold mb-1">
        <div className="flex">
          {required && <span className="text-red-500 mr-2">*</span>}
          <div className="flex gap-2 justify-center">
            <div className="text-base">{label}</div>
            {note && (
              <Popover content={note}>
                <QuestionCircleFilled style={{ opacity: 0.8 }} />
              </Popover>
            )}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
