"use client";

import assets from "@/assets";
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
import { SubmitHandler, useForm } from "react-hook-form";

type TPatientRegisterFormData = {
  password: string;
  patient: {
    name: string;
    email: string;
    contactNumber: string;
    address: string;
  };
};

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TPatientRegisterFormData>();
  const onSubmit: SubmitHandler<TPatientRegisterFormData> = (data) =>
    console.log(data);

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
                    label="Name"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.name")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.email")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("password")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Contact Number"
                    type="tel"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.contactNumber")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Address"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.address")}
                  />
                </Grid>
              </Grid>

              {/* submit button */}
              <Button
                sx={{
                  marginY: "16px",
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>

              <Typography component="p" fontWeight={300}>
                Do You Already Have an Account?{" "}
                <span className="text-[#1586FD] font-medium">
                  <Link href="/login" color="primary.main">
                    Login
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

export default RegisterPage;
