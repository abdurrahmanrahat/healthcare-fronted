"use client";

import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHSelectField from "@/components/Forms/PHSelectField";
import {
  useGetDoctorQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/doctorApi";
import { Gender } from "@/types";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TParams = {
  params: {
    doctorId: string;
  };
};

const DoctorUpdatePage = ({ params }: TParams) => {
  const router = useRouter();

  //   console.log(params.doctorId);
  const id = params?.doctorId;

  const { data, isLoading } = useGetDoctorQuery(id);
  //   console.log(data);

  const [updateDoctor] = useUpdateDoctorMutation();

  const handleDoctorForm = async (values: FieldValues) => {
    values.experience = Number(values.experience);
    values.apointmentFee = Number(values.apointmentFee);
    values.id = id;

    // console.log({ id: values.id, body: values });

    try {
      const res = await updateDoctor({ id: values.id, body: values }).unwrap();
      //   console.log(res);
      if (res?.id) {
        toast.success("Doctor Updated Successfully!!!");
        router.push("/dashboard/admin/doctors");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const defaultValues = {
    email: data?.email || "",
    name: data?.name || "",
    contactNumber: data?.contactNumber || "",
    address: data?.address || "",
    registrationNumber: data?.registrationNumber || "",
    gender: data?.gender || "",
    experience: data?.experience || 0,
    apointmentFee: data?.apointmentFee || 0,
    qualification: data?.qualification || "",
    currentWorkingPlace: data?.currentWorkingPlace || "",
    designation: data?.designation || "",
  };

  return (
    <Box>
      <Typography component="h5" variant="h5">
        Update Doctor Info
      </Typography>

      {isLoading ? (
        "Loading..."
      ) : (
        <PHForm
          onSubmit={handleDoctorForm}
          defaultValues={data && defaultValues}
        >
          <Grid container spacing={2} sx={{ my: 5 }}>
            {/* name */}
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="name"
                label="Name"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            {/* email */}
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="email"
                label="Email"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            {/* contact number */}
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="contactNumber"
                label="Contact Number"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            {/* address */}
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="address"
                label="Address"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            {/* registration number */}
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="registrationNumber"
                label="Registration Number"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            {/* experience */}
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="experience"
                type="number"
                label="Experience"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            {/* gender */}
            <Grid item xs={12} sm={12} md={4}>
              <PHSelectField
                items={Gender}
                name="gender"
                label="Gender"
                sx={{ mb: 2 }}
              />
            </Grid>

            {/* apointmentFee */}
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="apointmentFee"
                type="number"
                label="Appointment Fee"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            {/* qualification */}
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="qualification"
                label="Qualification"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            {/* currentWorkingPlace */}
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="currentWorkingPlace"
                label="Current Working Place"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            {/* designation */}
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="designation"
                label="Designation"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
          </Grid>

          <Button
            sx={{
              mt: 2,
            }}
            type="submit"
          >
            Update
          </Button>
        </PHForm>
      )}
    </Box>
  );
};

export default DoctorUpdatePage;
