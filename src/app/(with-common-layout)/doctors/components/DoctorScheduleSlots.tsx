"use client";

import { getTimeIn12HourFormat } from "@/app/(with-dashboard-layout)/dashboard/doctor/schedules/components/MultipleSelectField";
import { useCreateAppointmentMutation } from "@/redux/api/appointmentApi";
import { useGetAllDoctorSchedulesQuery } from "@/redux/api/doctorScheduleApi";
import { useInitialPaymentMutation } from "@/redux/api/paymentApi";
import { TDoctorSchedule } from "@/types/doctor";

import { dateFormatter } from "@/utils/dateFormatter";

import { Box, Button, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useRouter } from "next/navigation";
import { useState } from "react";
dayjs.extend(utc);

const DoctorScheduleSlots = ({ id }: { id: string }) => {
  const [scheduleId, setScheduleId] = useState("");

  const router = useRouter();

  const query: Record<string, any> = {};

  query["doctorId"] = id;

  query["startDate"] = dayjs(new Date())
    .utc()
    .hour(0)
    .minute(0)
    .second(0)
    .millisecond(0)
    .toISOString();

  query["endDate"] = dayjs(new Date())
    .utc()
    .hour(23)
    .minute(59)
    .second(59)
    .millisecond(999)
    .toISOString();

  const { data, isLoading } = useGetAllDoctorSchedulesQuery({ ...query });

  const doctorSchedules = data?.doctorSchedules;

  console.log(doctorSchedules);

  const currentDate = new Date();
  const today = currentDate.toLocaleDateString("en-US", { weekday: "long" });

  const availableSlots = doctorSchedules?.filter(
    (doctor: TDoctorSchedule) => !doctor.isBooked
  );

  const [createAppointment] = useCreateAppointmentMutation();
  const [initialPayment] = useInitialPaymentMutation();

  const handleBookAppointment = async () => {
    try {
      if (id && scheduleId) {
        const res = await createAppointment({
          doctorId: id,
          scheduleId,
        }).unwrap();

        // payment initialize
        if (res.id) {
          const payRes = await initialPayment(res?.id).unwrap();

          if (payRes.paymentUrl) {
            router.push(payRes.paymentUrl);
          }
        }
      }
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  return (
    <Box mb={5}>
      <Box sx={{ bgcolor: "white", p: 3, mt: 1 }}>
        <Typography variant="h4" mb={3} color="primary.main">
          Availability
        </Typography>
        <Typography variant="h6" fontSize={16}>
          <b>Today: {dateFormatter(currentDate.toISOString()) + " " + today}</b>
        </Typography>
        <Box sx={{ borderBottom: "2px dashed #d0d0d0", mt: 2, mb: 3 }} />
        <Stack direction="row" alignItems="center" flexWrap="wrap" gap={2}>
          {availableSlots?.length ? (
            isLoading ? (
              "Loading..."
            ) : (
              availableSlots?.map((doctorSchedule: TDoctorSchedule) => {
                const formattedTimeSlot = `${getTimeIn12HourFormat(
                  doctorSchedule?.schedule?.startDate
                )} - ${getTimeIn12HourFormat(
                  doctorSchedule?.schedule?.endDate
                )}`;

                return (
                  <Button
                    key={doctorSchedule?.scheduleId}
                    color="primary"
                    onClick={() => setScheduleId(doctorSchedule?.scheduleId)}
                    variant={`${
                      doctorSchedule?.scheduleId === scheduleId
                        ? "contained"
                        : "outlined"
                    }`}
                  >
                    {formattedTimeSlot}
                  </Button>
                );
              })
            )
          ) : (
            <span style={{ color: "red" }}>
              No Schedule is Available Today!
            </span>
          )}
        </Stack>
      </Box>

      <Button
        onClick={handleBookAppointment}
        sx={{ display: "block", mx: "auto" }}
      >
        Book Appointment Now
      </Button>
    </Box>
  );
};

export default DoctorScheduleSlots;
