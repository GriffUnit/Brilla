import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { client } from "./sanity/lib/client"
import { AUTHOR_BY_ID_QUERY } from "./sanity/lib/queries"
import { writeClient } from "./sanity/lib/write-client"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
  callbacks: {
    async signIn({user: {name, email, image}, profile}) {

      const id = profile?.id; 
      const login = profile?.login; 
      const bio = profile?.bio;

      if (id) {

        const existingUser = await client.withConfig({useCdn: false}).fetch(AUTHOR_BY_ID_QUERY, {id});

        if (!existingUser) {
          await writeClient.create({
            _type: 'author',
            id,
            name,
            username: login,
            email,
            image,
            bio: bio || ''
          })
        };
      }
        return true;
      
    },
    async jwt ({token, account, profile}) {
      if (account && profile) {
        const user = await client.withConfig({useCdn: false}).fetch(AUTHOR_BY_ID_QUERY, {id: profile?.id});

        token.id = user?._id;
        console.log('token.id:', token.id);
      }

      return token;
    },

    async session({session, token}) {
      
      session.id = token.id as string;
      return session;
    }
  }
}) 