import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const authenticate = async (request: NextRequest): Promise<boolean> => {

    const session_id = request.cookies.get("session_id")?.value

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/authenticate`, {
        credentials: "include",
        headers: {
            Cookie: `session_id=${session_id}`
        }
    })

    if (res.status !== 200) {
        return false;
    }

    return true;
};

export async function middleware(request: NextRequest) {
    const authenticated = await authenticate(request);

    if (!authenticated) {
        return NextResponse.redirect(new URL("/login", request.nextUrl))
    }
}

export const config = {
    matcher: "/((?!login|register|_next/static|_next/image|favicon.ico).*)"
}
