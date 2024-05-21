import Header from "./components/Header/header";
import Footer from "./components/footer";
import HomePageNotSignIn from "./components/card/homePageNotSignIn";
import HomePageSignIn from "./components/card/homePageSignIn";
import { getUserSession } from "@/lib/session";

export default async function Home() {
  const session = await getUserSession();
  return (
    <div className="flex flex-col h-[100vh] justify-between">
      <Header user={session?.user} />
      <main className="flex justify-center w-full">
        <div className="w-[80%] min-h-[calc(100vh-10rem)] flex items-center">
          {session?.user === undefined ? (
            <HomePageNotSignIn />
          ) : (
            <HomePageSignIn />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
