import { TDoctor } from "..";

export interface TDoctorSchedule {
  doctorId: string;
  scheduleId: string;
  isBooked: boolean;
  createdAt: string;
  updatedAt: string;
  appointmentId: string | null;
  doctor: TDoctor;
  schedule: TSchedule;
}

export interface TSchedule {
  id: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
}
