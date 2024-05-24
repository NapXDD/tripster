import { LoadingOutlined } from "@ant-design/icons";
import { Skeleton, Spin } from "antd";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Spin
        indicator={
          <LoadingOutlined style={{ fontSize: 200, color: "#ff385dff" }} spin />
        }
      />
    </div>
  );
}
