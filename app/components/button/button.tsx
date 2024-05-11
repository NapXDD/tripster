import { LoadingOutlined } from "@ant-design/icons";

export default function Button({
  children,
  onClick,
  className,
  isLoading,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  isLoading?: boolean;
}) {
  return (
    <button
      disabled={isLoading}
      className={`${isLoading ? "bgRedHover" : "bgRed"} text-white ${
        className ? className : "p-1"
      } min-w-[80px] rounded-3xl ${isLoading ? "" : "hover:bgRedHover"}`}
      onClick={onClick}
    >
      {isLoading ? <LoadingOutlined /> : children}
    </button>
  );
}
