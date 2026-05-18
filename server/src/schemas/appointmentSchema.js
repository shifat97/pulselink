import z from "zod";

export const CreateAppointmentSchema = z.object({
  userId: z.string(),
  doctorId: z.string(),
  appointmentDay: z.string(),
  appointmentTime: z.string(),
});
