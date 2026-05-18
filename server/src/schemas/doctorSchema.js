import z from "zod";

export const CreateDoctorSchema = z.object({
  name: z.string().min(1, "Name is required"),
  type: z.string().min(1, "Type is required"),
  isTopDoctor: z.boolean().default(false),
  isAvailable: z.boolean().default(false),
  image: z.string().optional(),
  degrees: z.array(z.string()).min(1, "Degree is required"),
  description: z.string().min(20, "Description is required"),
  yearsOfExperience: z.number().positive("Experience is required"),
  appointmentFee: z.number().positive("Appointment fees is required"),
  address: z.object({
    street: z.string().min(1, "Street is required"),
    area: z.string().min(1, "Area is required"),
  }),
  bookingDays: z.array(z.string()).min(1, "Booking day is required"),
  bookingTimes: z.array(z.string()).min(1, "Booking time is required"),
});
