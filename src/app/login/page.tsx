"use client";

import assets from "@/assets";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const validationSchema = z.object({
  email: z.string().email("Put a valid Email Address."),
  password: z.string().min(6, "Password at least 6 characters"),
});

const LoginPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (values: FieldValues) => {
    // console.log(values);

    try {
      const res = await userLogin(values);
      if (res?.data?.accessToken) {
        toast.success(res.message);
        storeUserInfo({ accessToken: res.data.accessToken });
        // router.push("/dashboard");
      } else {
        setError(res?.message);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            padding: 4,
            textAlign: "center",
          }}
        >
          {/* logo and text */}
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box mb={1}>
              <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login PH HealthCare
              </Typography>
            </Box>
          </Stack>

          {/* show backed error message */}
          {error && (
            <Box>
              <Typography
                sx={{
                  backgroundColor: "red",
                  padding: "1px",
                  borderRadius: "2px",
                  color: "#fff",
                  marginTop: "5px",
                }}
              >
                {error}
              </Typography>
            </Box>
          )}

          {/* form field */}
          <Box>
            <PHForm
              onSubmit={handleLogin}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <PHInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={12}>
                  <PHInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>

              {/* forget password */}
              <Typography textAlign="end" component="p" mb={1} fontWeight={300}>
                Forgot Password?
              </Typography>

              {/* submit button */}
              <Button
                sx={{
                  marginY: "16px",
                }}
                fullWidth={true}
                type="submit"
              >
                Login
              </Button>

              <Typography component="p" fontWeight={300}>
                Don&apos;t Have an Account?{" "}
                <span className="text-[#1586FD] font-medium">
                  <Link href="/register" color="primary.main">
                    Register
                  </Link>
                </span>
              </Typography>
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
