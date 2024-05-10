import CloseButton from "../button/closeButton";

export default function OverlayModal({
  children,
  title,
}: {
  children?: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="bg-white rounded-xl w-full md:w-auto lg:w-auto">
      {title ? (
        <div className="flex mt-3 justify-between items-center relative w-full">
          <div className="absolute right-0 mr-2">
            <CloseButton />
          </div>
          <div className="w-full flex justify-center">{title} </div>
        </div>
      ) : (
        <div className="flex justify-end m-2">
          <CloseButton />
        </div>
      )}

      <div className="mb-14 ml-14 mr-14 mt-6 flex flex-col gap-2 justify-center items-center">
        {children}
      </div>
    </div>
  );
}
