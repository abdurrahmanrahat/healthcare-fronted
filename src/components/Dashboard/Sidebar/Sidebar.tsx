import assets from "@/assets";
import { getUserInfo } from "@/services/auth.services";
import { TUserRole } from "@/types";
import { drawerItems } from "@/utils/drawerItem";
import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  // const [userRole, setUserRole] = useState("");

  // useEffect(() => {
  //   const { role } = getUserInfo() as any;
  //   setUserRole(role);
  // }, []);
  const { role: userRole } = getUserInfo();

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
        {drawerItems(userRole as TUserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
