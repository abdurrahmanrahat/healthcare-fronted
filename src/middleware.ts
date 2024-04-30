import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { authKey } from "./constants/authkey";

const AuthRoutes = ["/login", "/register"];
const commonPrivateRoutes = ["/dashboard", "/dashboard/change-password"];
const roleBasedPrivateRoutes = {
  PATIENT: [/^\/dashboard\/patient/],
  DOCTOR: [/^\/dashboard\/doctor/],
  ADMIN: [/^\/dashboard\/admin/],
  SUPER_ADMIN: [/^\/dashboard\/super-admin/],
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = cookies().get(authKey)?.value;

  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (accessToken && commonPrivateRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  let decodedData = null;
  if (accessToken) {
    decodedData = jwtDecode(accessToken) as any;
  }
  const role = decodedData?.role;

  //   // admin check
  //   if (role === "ADMIN" && pathname.startsWith("/dashboard/admin")) {
  //     return NextResponse.next();
  //   }

  type TRole = keyof typeof roleBasedPrivateRoutes;

  // role based protected
  if (role && roleBasedPrivateRoutes[role as TRole]) {
    const routes = roleBasedPrivateRoutes[role as TRole];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/register", "/dashboard/:page*"],
};
