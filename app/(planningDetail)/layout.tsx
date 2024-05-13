import { getUserSession } from "@/lib/session";
import StoreProvider from "../StoreProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import OverLay from "../components/overlay";
import Header from "../components/Header/header";
import { components } from "@/utils/overlayComponent";
import SideBar from "../components/sidebar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUserSession();
  return (
    <StoreProvider>
      <AntdRegistry>
        <OverLay Component={components} />

        <div className="flex flex-col min-h-screen bg-gray-200">
          <div className="fixed w-full bg-white">
            <Header user={user} />
          </div>
          <SideBar />
          <div className="flex min-h-[calc(100vh-10rem)]">{children}</div>
        </div>
      </AntdRegistry>
    </StoreProvider>
  );
}
