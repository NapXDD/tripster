import { Session, getServerSession } from "next-auth";
import { authOptions } from "./auth";

export const getUserSession = async (): Promise<Session | undefined> => {
  const authUserSession = await getServerSession(authOptions);
  if (authUserSession !== null) {
    return authUserSession;
  }
  return undefined;
};
