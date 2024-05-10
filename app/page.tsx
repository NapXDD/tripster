import { getUserSession } from "@/lib/session";
import Header from "./components/Header/header";

export default async function Home() {
  const user = await getUserSession();
  return (
    <div className="flex flex-col gap-2">
      <Header user={user} />
      <main className="flex justify-center">
        <div className="w-[80%]">This is main page</div>
      </main>
    </div>
  );
}
