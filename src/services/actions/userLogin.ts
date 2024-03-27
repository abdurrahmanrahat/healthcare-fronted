"use server";

import { TFormValues } from "@/app/login/page";

export const userLogin = async (data: TFormValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKED_URL}/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = await res.json();

  return userInfo;
};