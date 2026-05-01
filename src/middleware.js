import { NextResponse } from "next/server";

export default async function middleware(request) {
    const sessionResponse = await fetch(`${request.nextUrl.origin}/api/auth/get-session`, {
        headers: {
            cookie: request.headers.get("cookie") || "",
        },
    });

    const session = await sessionResponse.json();

    if (!session) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ["/courses/:path*", "/profile/:path*"],
};
