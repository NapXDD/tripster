import Image from "next/image";
import { getUserSession } from "./lib/session";

export default async function Home() {
  const user = await getUserSession();
  return <main>{JSON.stringify(user)}</main>;
}
