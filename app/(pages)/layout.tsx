import { getUserSession } from "@/lib/session";
import StoreProvider from "../StoreProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import OverLay from "../components/overlay";
import Header from "../components/Header/header";
import { components } from "@/utils/overlayComponent";
import Footer from "../components/footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUserSession();
  return (
    <>
      <OverLay Component={components} />
      <div className="flex flex-col justify-between min-h-screen">
        <Header user={user} />
        <div className="flex justify-center min-h-[calc(100vh-10rem)]">
          <div className="w-[80%] mt-5">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}
