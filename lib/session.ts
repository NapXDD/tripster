import { User, getServerSession } from "next-auth";

export const session = async ({ session, token }: any) => {
  session.user = token.user;
  return session;
};

export const getUserSession = async (): Promise<User> => {
  const authUserSession = await getServerSession({
    callbacks: {
      session,
    },
  });
  return authUserSession?.user;
};
