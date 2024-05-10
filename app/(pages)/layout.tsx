import { getUserSession } from "@/lib/session";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import StoreProvider from "../StoreProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import OverLay from "../components/overlay";
import Header from "../components/Header/header";
import { components } from "@/utils/overlayComponent";

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
        <Header user={user} />
        <div className="flex justify-center">
          <div className="w-[80%] mt-5">{children}</div>
        </div>
      </AntdRegistry>
    </StoreProvider>
  );
}
