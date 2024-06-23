import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import StoreProvider from "./StoreProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import OverLay from "./components/overlay";
import { components } from "@/utils/overlayComponent";
import { ToastContainer } from "react-toastify";
import { Providers } from "./components/provider";
import { Session } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tripster",
  description: "A planning travel web app",
};

type RootLayoutParams = {
  session: Session | null; // Adjust according to whether session can be null
  [key: string]: any; // Allow other parameters of any type
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <AntdRegistry>
          <Providers>
            <body className={inter.className}>
              <ToastContainer />
              <OverLay Component={components} />
              {children}
            </body>
          </Providers>
        </AntdRegistry>
      </html>
    </StoreProvider>
  );
}
