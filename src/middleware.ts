import { NextRequest, NextResponse } from "next/server";

type UserRole = "admin" | "customer" | "freelancer";

const ADMIN_HOME = "/admin/dashboard";
const USER_HOME = "/dashboard";
const SIGN_IN = "/sign-in";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const role = request.cookies.get("client_portal_role")?.value as
    | UserRole
    | undefined;

  const isAdminRoute = pathname.startsWith("/admin");
  const isProtectedRoute =
    pathname.startsWith("/admin") ||
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/projects") ||
    pathname.startsWith("/meetings") ||
    pathname.startsWith("/notifications") ||
    pathname.startsWith("/profile");

  if (!isProtectedRoute) return NextResponse.next();

  if (!role) {
    return NextResponse.redirect(new URL(SIGN_IN, request.url));
  }

  if (isAdminRoute && role !== "admin") {
    return NextResponse.redirect(new URL(USER_HOME, request.url));
  }

  const isNonAdminProtectedRoute =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/projects") ||
    pathname.startsWith("/meetings") ||
    pathname.startsWith("/notifications");

  if (role === "admin" && isNonAdminProtectedRoute) {
    return NextResponse.redirect(new URL(ADMIN_HOME, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/dashboard/:path*",
    "/projects/:path*",
    "/meetings/:path*",
    "/notifications/:path*",
    "/profile/:path*",
  ],
};

