"use server";

import { authKey } from "@/constants/authkey";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const setAccessToken = (token: string, options?: any) => {
  cookies().set(authKey, token);

  if (options && options.redirect) {
    redirect(options.redirect);
  }
};
