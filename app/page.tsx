import { getUserSession } from "@/lib/session";
import Header from "./components/Header/header";
import Link from "next/link";
import Footer from "./components/footer";

export default async function Home() {
  const user = await getUserSession();
  return (
    <div className="flex flex-col h-[100vh] justify-between">
      <Header user={user} />
      <main className="flex justify-center w-full">
        <div className="w-[80%] min-h-[calc(100vh-10rem)] flex items-center">
          <div className="flex flex-col">
            <div>lmao</div>
            <Link
              className="bgRed px-5 py-2 text-white rounded-3xl"
              href={"/createPlanning"}
            >
              Lập kế hoạch
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
