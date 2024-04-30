import { FacebookAuthButton, GoogleAuthButton } from "./components/authButton";
import { getUserSession } from "../lib/session";

export default async function Home() {
  const user = await getUserSession();
  return (
    <main>
      <GoogleAuthButton />
      <FacebookAuthButton />
    </main>
  );
}
