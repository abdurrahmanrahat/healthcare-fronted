// "use server";

import { FieldValues } from "react-hook-form";

export const userLogin = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKED_URL}/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
    // cache: "no-store",
    credentials: "include", // set refresh token in the browser cookies.
  });
  const userInfo = await res.json();

  return userInfo;
};
