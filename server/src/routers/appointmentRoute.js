import { Router } from "express";
import { validatePayload } from "../middlewares/index.js";
import { CreateAppointmentSchema } from "../schemas/index.js";
import { appointmentController } from "../controllers/index.js";

const appointmentRouter = Router();

appointmentRouter.post(
  "/create",
  validatePayload(CreateAppointmentSchema),
  appointmentController.createAppointment
);

appointmentRouter.get("/", appointmentController.getAppointment);

export default appointmentRouter;
