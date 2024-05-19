import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import StoreProvider from "./StoreProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import OverLay from "./components/overlay";
import { components } from "@/utils/overlayComponent";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tripster",
  description: "A planning travel web app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <AntdRegistry>
            <ToastContainer />
            <OverLay Component={components} />
            {children}
          </AntdRegistry>
        </body>
      </html>
    </StoreProvider>
  );
}
