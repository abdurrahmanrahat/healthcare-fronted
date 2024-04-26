"use client";

import { useGetAllDoctorSchedulesQuery } from "@/redux/api/doctorScheduleApi";
import { dateFormatter } from "@/utils/dateFormatter";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import DoctorScheduleModal from "./components/DoctorScheduleModal";

const DoctorSchedulePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [allSchedules, setAllSchedules] = useState<any>([]);

  const { data, isLoading } = useGetAllDoctorSchedulesQuery({});
  //   console.log(data);

  const schedules = data?.doctorSchedules;
  //   console.log(schedules);
  const meta = data?.meta;

  useEffect(() => {
    const updatedData = schedules?.map((schedule: any, index) => {
      //   console.log(schedule);
      return {
        sl: index + 1,
        id: schedule.doctorId,
        startDate: dateFormatter(schedule?.schedule.startDate),
        // endDate: dateFormatter(schedule?.schedule.endDate),
        startTime: dayjs(schedule?.schedule.startDate).format("hh:mm a"),
        endTime: dayjs(schedule?.schedule.endDate).format("hh:mm a"),
      };
    });

    setAllSchedules(updatedData);
  }, [schedules]);

  const columns: GridColDef[] = [
    { field: "sl", headerName: "SL", flex: 1 },
    { field: "startDate", headerName: "Start Date", flex: 1 },
    // { field: "endDate", headerName: "End Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              //   onClick={() => handleDelete(row.id)}
              aria-label="delete"
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>
        Create Doctor Schedule
      </Button>
      <DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />

      {/* display doctor schedules with table */}
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={allSchedules ?? []} columns={columns} />
        </Box>
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  );
};

export default DoctorSchedulePage;
