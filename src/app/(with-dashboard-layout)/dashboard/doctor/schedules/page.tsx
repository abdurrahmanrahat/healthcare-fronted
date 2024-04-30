"use client";

import { useGetAllDoctorSchedulesQuery } from "@/redux/api/doctorScheduleApi";
import { dateFormatter } from "@/utils/dateFormatter";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton, Pagination } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import DoctorScheduleModal from "./components/DoctorScheduleModal";

const DoctorSchedulePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const query: Record<string, any> = {};

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);

  query["page"] = page;
  query["limit"] = limit;

  // handle pagination
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const [allSchedules, setAllSchedules] = useState<any>([]);

  const { data, isLoading } = useGetAllDoctorSchedulesQuery({ ...query });
  //   console.log(data);

  const schedules = data?.doctorSchedules;
  //   console.log(schedules);
  const meta = data?.meta;

  let pageCount: number;
  if (meta?.total) {
    pageCount = Math.ceil(meta?.total / limit);
  }

  useEffect(() => {
    const updatedData = schedules?.map((schedule: any, index) => {
      //   console.log(schedule);
      return {
        id: schedule.scheduleId,
        startDate: dateFormatter(schedule?.schedule.startDate),
        startTime: dayjs(schedule?.schedule.startDate).format("hh:mm a"),
        endTime: dayjs(schedule?.schedule.endDate).format("hh:mm a"),
      };
    });

    setAllSchedules(updatedData);
  }, [schedules]);

  const columns: GridColDef[] = [
    { field: "startDate", headerName: "Start Date", flex: 1 },
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
            {/* <IconButton aria-label="edit">
              <EditIcon />
            </IconButton> */}
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Button
        onClick={() => setIsModalOpen(true)}
        endIcon={<AddIcon />}
        sx={{
          my: 1,
        }}
      >
        Create Doctor Schedule
      </Button>
      <DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />

      {/* display doctor schedules with table */}
      {!isLoading ? (
        <Box my={2}>
          <DataGrid
            rows={allSchedules ?? []}
            columns={columns}
            hideFooterPagination
            slots={{
              footer: () => {
                return (
                  <Box
                    sx={{
                      mb: 2,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Pagination
                      color="primary"
                      count={pageCount}
                      page={page}
                      onChange={handleChange}
                    />
                  </Box>
                );
              },
            }}
          />
        </Box>
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  );
};

export default DoctorSchedulePage;
