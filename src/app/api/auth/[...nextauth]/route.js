import { connect } from "@/app/lib/dbConnect";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";

const userList= [
    {name: "hablu", password: "1234"},
    {name: "bablu", password: "5678"},
    {name: "dablu", password: "9100"},
]
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Credentials',
    
    credentials: {
      email: { label: "email", type: "text", placeholder: "Enter email" },
      password: { label: "Password", type: "password", placeholder: "Enter password"}
    },
    async authorize(credentials, req) {
      const {email, password}= credentials;

      // find user
      // const user = userList.find((u)=> u.name == username);
      const user = await connect("users").findOne({email});
      if(!user) return null;

      // match password
      const isPasswordOk = await bcrypt.compare(password, user.password);

      if(isPasswordOk){
        return user;
      }
      return null
    }
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
],
callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    return true
  },
  // async redirect({ url, baseUrl }) {
  //   return baseUrl
  // },
  async session({ session, token, user }) {
    if(token){
      session.role=token.role
    }
    return session
  },
  async jwt({ token, user, account, profile, isNewUser }) {
    if(user){
      token.email=user.email;
      token.role= user.role;
    }
    return token
  }
},
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};