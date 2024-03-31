import { USER_ROLE } from "@/constants/tole";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type TMeta = {
  page: number;
  limit: number;
  total: number;
};

// here, keyof take the all key of the obj and typeof take the all type of its value.
export type TUserRole = keyof typeof USER_ROLE;

export type TDrawerItems = {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: TDrawerItems[];
};
