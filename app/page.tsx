import Header from "./components/Header/header";
import Footer from "./components/footer";
import HomePageNotSignIn from "./components/card/homePageNotSignIn";
import HomePageSignIn from "./components/card/homePageSignIn";
import { getUserSession } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { unstable_noStore as noStore } from "next/cache";

export default async function Home() {
  noStore();
  revalidatePath("/", "page");
  const session = await getUserSession();
  return (
    <div className="flex flex-col h-[100vh] justify-between">
      <Header user={session?.user} />
      <main className="flex justify-center w-full">
        <div className="w-[80%] flex items-center">
          {session?.user === undefined || session === null ? (
            <HomePageNotSignIn />
          ) : (
            <div className="mt-6">
              <HomePageNotSignIn />
              <div className="mt-10 mb-10">
                <HomePageSignIn
                  userId={session.user.id}
                  token={session.user.token}
                />
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
