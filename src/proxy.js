import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const privateRoutes = ["/privet", "/dashboard"];

export async function proxy(req) {
    const token = await getToken({ req });

    const pathname = req.nextUrl.pathname;

    const isAuthenticated = Boolean(token);

    const isPrivate = privateRoutes.some((route) =>
        pathname.startsWith(route)
    );

    console.log("PROXY:", {
        pathname,
        isAuthenticated,
        token,
    });

    if (!isAuthenticated && isPrivate) {
        const loginUrl = new URL("/api/auth/signin", req.url);

        loginUrl.searchParams.set(
            "callbackUrl",
            req.nextUrl.href
        );

        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/privet/:path*",
        "/dashboard/:path*",
    ],
};