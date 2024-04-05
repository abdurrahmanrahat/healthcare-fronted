import PHFileUploader from "@/components/Forms/PHFileUploader";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialistModal = ({ open, setOpen }: TModalProps) => {
  const handleSpecialtyForm = (values: FieldValues) => {};
  return (
    <PHModal open={open} setOpen={setOpen} title="Create a new Specialty">
      <PHForm onSubmit={handleSpecialtyForm}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <PHInput name="title" label="Title" />
          </Grid>
          <Grid item md={6}>
            <PHFileUploader name="file" label="Upload File" />
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
    </PHModal>
  );
};

export default SpecialistModal;
