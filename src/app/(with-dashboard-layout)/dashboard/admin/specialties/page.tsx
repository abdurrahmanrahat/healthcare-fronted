"use client";

import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import { useState } from "react";
import SpecialtyModal from "./components/SpecialtyModal";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data, isLoading } = useGetAllSpecialtiesQuery({});

  // handle delete
  const handleDelete = (id: string) => {
    // console.log(id);
  };

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 300 },
    {
      field: "icon",
      headerName: "Icon",
      width: 300,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row.icon} width={20} height={20} alt="icon" />
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 400,
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        );
      },
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
        <Box my={2}>
          <DataGrid rows={data} columns={columns} />
        </Box>
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  );
};

export default SpecialtiesPage;
