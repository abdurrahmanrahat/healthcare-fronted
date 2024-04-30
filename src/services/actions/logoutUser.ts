import { authKey } from "@/constants/authkey";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { removeUser } from "../auth.services";
import { deleteCookies } from "./deleteCookies";

export const logoutUser = (router: AppRouterInstance) => {
  removeUser();
  deleteCookies([authKey, "refreshToken"]);
  router.push("/");
  router.refresh();
};
