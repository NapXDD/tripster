import Header from "./components/header";
import SignInModal from "./components/signInModal";
import SignUpModal from "./components/signUpModal";

export default async function Home() {
  return (
    <main className="bg-gray-100 w-[100vw] h-[100vh] flex">
      <Header />
    </main>
  );
}
