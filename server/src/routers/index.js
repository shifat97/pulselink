import doctorRouter from "./doctorsRoute.js";
import appointmentRouter from "./appointmentRoute.js";
import authRouter from "./authRoute.js";

const configureRouters = (app) => {
  app.use("/auth", authRouter);
  app.use("/doctors", doctorRouter); // path, route
  app.use("/appointments", appointmentRouter);
};

export default configureRouters;
