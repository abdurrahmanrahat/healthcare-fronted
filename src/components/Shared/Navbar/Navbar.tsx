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
    <Box
      sx={{
        backgroundColor: "primary.main",
      }}
    >
      <Container>
        <Stack
          py={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h4" component={Link} href="/" fontWeight={600}>
            P
            <Box component="span" color="#fff">
              H
            </Box>{" "}
            HealthCare
          </Typography>

          <Stack direction="row" gap={3} justifyContent="space-between">
            <Typography component={Link} href="/consultation" color="#fff">
              Consultation
            </Typography>
            <Typography component={Link} href="/" color="#fff">
              Health Plans
            </Typography>
            <Typography component={Link} href="/" color="#fff">
              Medicine
            </Typography>

            <Typography component={Link} href="/doctors" color="#fff">
              Doctors
            </Typography>
            {userInfo?.userId && (
              <Typography component={Link} href="/dashboard" color="#fff">
                Dashboard
              </Typography>
            )}
          </Stack>

          {/* button */}
          {userInfo ? (
            <Button
              color="error"
              onClick={handleLogout}
              sx={{
                boxShadow: 0,
              }}
            >
              Logout
            </Button>
          ) : (
            <Button
              component={Link}
              href="/login"
              sx={{
                boxShadow: 0,
              }}
            >
              Login
            </Button>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
