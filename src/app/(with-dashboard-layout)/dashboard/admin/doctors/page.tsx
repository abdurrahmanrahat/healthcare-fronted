"use client";

import { useGetAllDoctorsQuery } from "@/redux/api/doctorApi";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import DoctorModal from "./components/DoctorModal";

const DoctorsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data, isLoading } = useGetAllDoctorsQuery({});
  // console.log(data);
  const doctors = data?.doctors;
  const meta = data?.meta;

  const columns: GridColDef[] = [
    { field: "name", headerName: "name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contactNumber", headerName: "Contact Number", flex: 1 },
    { field: "apointmentFee", headerName: "Charge", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create New Doctor</Button>
        <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} />

        <TextField size="small" placeholder="Search Doctor..." />
      </Stack>

      {/* display doctors with table */}
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={doctors} columns={columns} />
        </Box>
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  );
};

export default DoctorsPage;
