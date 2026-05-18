import { Router } from "express";
import { validatePayload } from "../middlewares/index.js";
import { CreateDoctorSchema } from "../schemas/index.js";
import { doctorController } from "../controllers/index.js";

const doctorRouter = Router();

doctorRouter.post(
  "/",
  validatePayload(CreateDoctorSchema),
  doctorController.createDoctor
);

doctorRouter.get("/", doctorController.getDoctors);
doctorRouter.get("/top", doctorController.getTopDoctors);
doctorRouter.get("/doctor", doctorController.getDoctorByParameter);

// doctorRouter.get("/", productController.getProducts);

export default doctorRouter;
