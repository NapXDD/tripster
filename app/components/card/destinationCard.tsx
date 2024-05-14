export default function DestinationCard({
  data,
}: {
  data: Record<string, string> | null;
}) {
  return (
    <div className="flex flex-col">
      {data === null ? (
        <div className="text-gray-500 text-sm">No place</div>
      ) : (
        <>Lmao</>
      )}
    </div>
  );
}
