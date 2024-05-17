import { getUserSession } from "@/lib/session";
import Header from "../components/Header/header";
import Footer from "../components/footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUserSession();
  return (
    <>
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
