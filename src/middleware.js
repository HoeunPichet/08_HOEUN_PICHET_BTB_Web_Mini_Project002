import { NextResponse } from "next/server";
import { getAuthToken } from "@/utils/api";

export async function middleware(req) {
    const _ROUTES = ["/login", "/register"];
    const _PATH = req.nextUrl.pathname;
    const _SESSION = await getAuthToken();

    //  Go to login page when unauthorized
    if (!_SESSION) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    // Redirect logged-in users away from login and register pages
    if (_SESSION && _ROUTES.includes(_PATH)) {
        return NextResponse.redirect(new URL("/todo", req.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/todo/:path*"],
};