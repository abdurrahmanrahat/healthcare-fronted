import PHModal from "@/components/Shared/PHModal/PHModal";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import React, { useState } from "react";

type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorScheduleModal = ({ open, setOpen }: TModalProps) => {
  const [selectedDate, setSelectedDate] = useState(
    dayjs(new Date()).toISOString()
  );

  console.log(selectedDate);

  return (
    <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Controlled picker"
          value={dayjs(selectedDate)}
          onChange={(newValue) =>
            setSelectedDate(dayjs(newValue).toISOString())
          }
        />
      </LocalizationProvider>
    </PHModal>
  );
};

export default DoctorScheduleModal;
