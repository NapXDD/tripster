import Link from "next/link";

export default function HomePageSignIn() {
  return (
    <div className="min-h-[calc(100vh-10rem)] w-full">
      <div className="flex mt-4">
        <div className="flex justify-between items-center w-full">
          <div className="title">Recent Trip View</div>
          <Link
            className="bgRed px-4 py-2 text-white rounded-3xl"
            href={"/createPlanning"}
          >
            Lập kế hoạch
          </Link>
        </div>
      </div>
    </div>
  );
}
