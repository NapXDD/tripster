import { LoadingOutlined } from "@ant-design/icons";

export default function Button({
  children,
  onClick,
  className,
  isLoading,
  isDisable,
  htmlType,
  type,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  isLoading?: boolean;
  isDisable?: boolean;
  htmlType?: "button" | "submit" | "reset";
  type?: "default" | "theme";
}) {
  return (
    <button
      disabled={isDisable || isLoading}
      className={
        type === "theme"
          ? `${isLoading ? "bgRedHover" : "bgRed"} text-white ${
              className ? className : "p-1"
            } min-w-[80px] rounded-3xl hover:bgRedHover`
          : `${isLoading ? "bgWhiteHover" : "bg-white"} text-gray-800 ${
              className ? className : "p-1"
            } min-w-[80px] border-2 rounded-3xl hover:bgWhiteHover`
      }
      onClick={onClick}
      type={htmlType}
    >
      {isLoading ? <LoadingOutlined /> : children}
    </button>
  );
}
