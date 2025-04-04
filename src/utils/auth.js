import { failedResponse } from "@/helper/message";
import { loginService } from "@/service/service";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                const { email, password } = credentials;
                const RESPONSE = await loginService({ email, password });

                if (RESPONSE?.status == "OK") {
                    return RESPONSE;
                } else {
                    return failedResponse("Invalid email or password.");
                }
            },
        }),
    ],
    callbacks: {
        async jwt(token) {
            return token;
        },
        async session(props) {
            const { token } = props;
            return token.token.user;
        },
    },
    strategy: "jwt",
    pages: {
        signIn: "/login", // Redirect users to this page for sign-in
    },
});