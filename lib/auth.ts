import { Account, NextAuthOptions, Profile, Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import {
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from "@/utils/importer";
import { LoginDTO } from "@/utils/DTO/authenticate";
import { login } from "@/utils/api/authenticate";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 3600,
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      id: "credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        //doing backend here
        let data: LoginDTO = {
          email: "",
          password: "",
        };
        if (credentials) {
          data = {
            email: credentials.email,
            password: credentials.password,
          };
        }

        const res = await login(data);
        if (res.status === "200" || res.status === "201") {
          const user = {
            id: res.messageData.userId,
            name: res.messageData.username,
            email: res.messageData.email,
            image: res.messageData.image,
            active: res.messageData.active,
            token: res.messageData.token,
            expires: res.messageData.expiresIn,
          };
          // If no error and we have user data, return it
          return user;
        } else {
          // Return null if user data could not be retrieved
          return null;
        }
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user) {
        throw new Error("No profile");
      }
      return true;
    },
    async jwt({
      token,
      user,
      trigger,
      session,
      account,
      profile,
      isNewUser,
    }: {
      token: JWT;
      user: User | AdapterUser;
      trigger?: "signIn" | "signUp" | "update" | undefined;
      session?: any;
      account: Account | null;
      profile?: Profile | undefined;
      isNewUser?: boolean | undefined;
    }) {
      if (trigger === "update" && session?.newUser) {
        token.user = session.newUser;
        return { ...token };
      } else {
        if (user) {
          token.user = user;
        }
      }
      return { ...token };
    },
    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
      user: User;
    }) {
      if (session.user !== undefined && session.user !== null) {
        session.user = token.user;
      }
      return { ...session };
    },
  },
};
