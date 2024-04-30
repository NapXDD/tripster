import LoginModal from "./components/signInModal";

export default async function Home() {
  return (
    <main className="bg-gray-100 w-[100vw] h-[100vh] flex justify-center items-center">
      <LoginModal />
    </main>
  );
}
