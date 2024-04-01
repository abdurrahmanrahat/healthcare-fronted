import assets from "@/assets";
import { TUserRole } from "@/types";
import { drawerItems } from "@/utils/drawerItem";
import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        sx={{
          py: 1,
          mt: 1,
        }}
        component={Link}
        href="/"
      >
        <Image src={assets.svgs.logo} width={40} height={40} alt="logo" />
        <Typography variant="h5" component={Link} href="/" fontWeight={600}>
          P
          <Box component="span" color="primary.main">
            H
          </Box>
          HealthCare
        </Typography>
      </Stack>
      <List>
        {drawerItems("admin" as TUserRole).map((item, index) => (
          <SidebarItem key={index} item={item} index={index} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
