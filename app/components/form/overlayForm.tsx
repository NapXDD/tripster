"use client";
import { Typography } from "antd";

export default function FormItem({
  children,
  label,
}: {
  children?: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex flex-col">
      <Typography.Title level={5}>{label}</Typography.Title>
      {children}
    </div>
  );
}
