import { getUserSession } from "@/lib/session";
import Header from "../components/Header/header";
import SideBar from "../components/sidebar";
import Footer from "../components/footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUserSession();
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-200">
        <div className="fixed w-full z-50 bg-white">
          <Header user={user} />
        </div>
        <SideBar />
        <div className="flex min-h-[calc(100vh-10rem)]">
          <div className="w-[75%] mt-[5rem] bg-gray-200 ml-[25%] lg:w-[85%] lg:ml-[15%]">
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
