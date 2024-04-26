import PHModal from "@/components/Shared/PHModal/PHModal";
import React from "react";

type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorScheduleModal = ({ open, setOpen }: TModalProps) => {
  return (
    <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
      <h1>abc</h1>
    </PHModal>
  );
};

export default DoctorScheduleModal;
