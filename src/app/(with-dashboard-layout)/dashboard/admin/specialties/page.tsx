"use client";

import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import { Box, Button, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import SpecialtyModal from "./components/SpecialtyModal";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data, isLoading } = useGetAllSpecialtiesQuery({});

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 100 },
    {
      field: "icon",
      headerName: "Icon",
      width: 100,
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
        <SpecialtyModal open={isModalOpen} setOpen={setIsModalOpen} />

        <TextField size="small" placeholder="Search Specialist..." />
      </Stack>

      {/* display specialties with table */}
      {!isLoading ? (
        <Box>
          <DataGrid rows={data} columns={columns} />
        </Box>
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  );
};

export default SpecialtiesPage;
