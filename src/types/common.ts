import { USER_ROLE } from "@/constants/tole";

export type TMeta = {
  page: number;
  limit: number;
  total: number;
};

// here, keyof take the all key of the obj and typeof take the all type of its value.
export type TUserRole = keyof typeof USER_ROLE;
