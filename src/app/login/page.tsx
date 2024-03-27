"use client";

import assets from "@/assets";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export type TFormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TFormValues>();

  const onSubmit: SubmitHandler<TFormValues> = async (values) => {
    // console.log(values);

    try {
      const res = await userLogin(values);
      if (res?.data?.accessToken) {
        toast.success(res.message);
        storeUserInfo({ accessToken: res.data.accessToken });
        router.push("/");
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

          {/* form field */}
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("email")}
                  />
                </Grid>
                <Grid item md={12}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("password")}
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
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
