"use client";

import useUserInfo from "@/hooks/useUserInfo";
import { logoutUser } from "@/services/actions/logoutUser";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  // const { userId } = getUserInfo();
  const userInfo = useUserInfo();

  const router = useRouter();

  // const AuthButton = dynamic(
  //   () => import("@/components/Ui/AuthButton/AuthButton"),
  //   { ssr: false }
  // );

  const handleLogout = () => {
    logoutUser(router);
  };

  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" component={Link} href="/" fontWeight={600}>
          P
          <Box component="span" color="primary.main">
            H
          </Box>{" "}
          HealthCare
        </Typography>

        <Stack direction="row" gap={3} justifyContent="space-between">
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography component={Link} href="/">
            Health Plans
          </Typography>
          <Typography component={Link} href="/">
            Medicine
          </Typography>
          <Typography component={Link} href="/">
            Diagnostics
          </Typography>
          <Typography component={Link} href="/">
            NFOs
          </Typography>
          {userInfo?.userId && (
            <Typography component={Link} href="/dashboard">
              Dashboard
            </Typography>
          )}
        </Stack>

        {/* button */}
        {userInfo?.userId ? (
          <Button color="error" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button component={Link} href="/login">
            Login
          </Button>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
