"use client";

import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import SpecialtyModal from "./components/SpecialtyModal";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data, isLoading } = useGetAllSpecialtiesQuery({});

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
        <SpecialtyModal open={isModalOpen} setOpen={setIsModalOpen} />

        <TextField size="small" placeholder="Search Specialist..." />
      </Stack>

      {/* display specialties with table */}
      <Box>Display</Box>
    </Box>
  );
};

export default SpecialtiesPage;
