import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHSelectField from "@/components/Forms/PHSelectField";
import PHFullScreenModal from "@/components/Shared/PHModal/PHFullScreenModal";
import { Gender } from "@/types";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorModal = ({ open, setOpen }: TModalProps) => {
  const handleDoctorForm = async (values: FieldValues) => {
    console.log(values);
  };

  const defaultValues = {
    doctor: {
      email: "",
      name: "",
      contactNumber: "",
      address: "",
      registrationNumber: "",
      experience: 0,
      gender: "",
      apointmentFee: 0,
      qualification: "",
      currentWorkingPlace: "",
      designation: "",
      profilePhoto: "",
    },
    password: "",
  };

  return (
    <PHFullScreenModal open={open} setOpen={setOpen} title="Create new Doctor">
      <PHForm onSubmit={handleDoctorForm} defaultValues={defaultValues}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          {/* name */}
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.name"
              label="Name"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          {/* email */}
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.email"
              label="Email"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          {/* password */}
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="password"
              type="password"
              label="Password"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          {/* contact number */}
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.contactNumber"
              label="Contact Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          {/* address */}
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.address"
              label="Address"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          {/* registration number */}
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.registrationNumber"
              label="Registration Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          {/* experience */}
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.experience"
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
              name="doctor.gender"
              label="Gender"
              sx={{ mb: 2 }}
            />
          </Grid>

          {/* apointmentFee */}
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.apointmentFee"
              type="number"
              label="Appointment Fee"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          {/* qualification */}
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.qualification"
              label="Qualification"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          {/* currentWorkingPlace */}
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.currentWorkingPlace"
              label="Current Working Place"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          {/* designation */}
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.designation"
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
          Create
        </Button>
      </PHForm>
    </PHFullScreenModal>
  );
};

export default DoctorModal;
