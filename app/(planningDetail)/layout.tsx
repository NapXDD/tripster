import { getUserSession } from "@/lib/session";
import Header from "../components/Header/header";
import SideBar from "../components/sidebar";
import Footer from "../components/footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-200">
        <div className="fixed w-full z-50 bg-white">
          <Header />
        </div>
        <SideBar />
        <div className="flex min-h-[calc(100vh-10rem)]">
          <div className="w-[calc(75%-0.5rem)] mt-[5rem] bg-gray-200 ml-[25%] lg:ml-[15%]">
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
