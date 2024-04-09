import PHDatePicker from "@/components/Forms/PHDatePicker";
import PHForm from "@/components/Forms/PHForm";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TModalProps) => {
  const handleScheduleForm = async (values: FieldValues) => {
    console.log(values);
  };

  return (
    <PHModal open={open} setOpen={setOpen} title="Create Schedule">
      <PHForm onSubmit={handleScheduleForm}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <PHDatePicker name="startDate" />
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

export default ScheduleModal;
