import { Router } from "express";
import { validatePayload } from "../middlewares/index.js";
import { CreateAuthSchema, UpdateAuthSchema } from "../schemas/index.js";
import { authController } from "../controllers/index.js";

const authRouter = Router();

authRouter.post(
  "/sign-up",
  validatePayload(CreateAuthSchema),
  authController.signUpUser
);
authRouter.post("/sign-in", authController.signInUser);
authRouter.patch(
  "/user/:id",
  validatePayload(UpdateAuthSchema),
  authController.updateUser
);

export default authRouter;
