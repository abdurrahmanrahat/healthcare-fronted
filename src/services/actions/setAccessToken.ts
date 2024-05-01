"use server";

import { authKey } from "@/constants/authkey";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const setAccessToken = (token: string, options?: any) => {
  cookies().set(authKey, token);

  const decodedUser = jwtDecode(token) as any;

  if (
    options &&
    options.passwordChangeRequired &&
    decodedUser?.role !== "PATIENT"
  ) {
    redirect("/dashboard/change-password");
  }
  if (options && !options.passwordChangeRequired && options.redirect) {
    redirect(options.redirect);
  }
};
