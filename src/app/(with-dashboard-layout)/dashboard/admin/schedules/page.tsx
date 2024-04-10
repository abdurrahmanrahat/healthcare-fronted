"use client";

import {
  useDeleteScheduleMutation,
  useGetAllSchedulesQuery,
} from "@/redux/api/scheduleApi";
import { dateFormatter } from "@/utils/dateFormatter";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import ScheduleModal from "./components/ScheduleModal";

const SchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [allSchedules, setAllSchedules] = useState<any>([]);

  const { data, isLoading } = useGetAllSchedulesQuery({});

  const schedules = data?.schedules;
  const meta = data?.meta;
  // console.log(schedules);

  useEffect(() => {
    const updatedData = schedules?.map((schedule: any) => {
      return {
        id: schedule.id,
        startDate: dateFormatter(schedule.startDate),
        endDate: dateFormatter(schedule.endDate),
        startTime: dayjs(schedule?.startDate).format("hh:mm a"),
        endTime: dayjs(schedule?.endDate).format("hh:mm a"),
      };
    });

    setAllSchedules(updatedData);
  }, [schedules]);

  const [deleteSchedule] = useDeleteScheduleMutation();

  // handle delete
  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSchedule(id).unwrap();
      if (res?.id) {
        toast.success("Schedule deleted successfully!!");
      }
    } catch (error: any) {
      console.error(error?.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "endDate", headerName: "End Date", flex: 1 },
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
              onClick={() => handleDelete(row.id)}
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
      <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
      <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />

      {/* display schedules with table */}
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

export default SchedulesPage;
