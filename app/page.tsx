import { getUserSession } from "@/lib/session";
import Header from "./components/Header/header";
import Footer from "./components/footer";
import HomePageNotSignIn from "./components/card/homePageNotSignIn";
import HomePageSignIn from "./components/card/homePageSignIn";

export default async function Home() {
  const user = await getUserSession();
  return (
    <div className="flex flex-col h-[100vh] justify-between">
      <Header user={user} />
      <main className="flex justify-center w-full">
        <div className="w-[80%] min-h-[calc(100vh-10rem)] flex items-center">
          {!user ? <HomePageNotSignIn /> : <HomePageSignIn />}
        </div>
      </main>
      <Footer />
    </div>
  );
}
