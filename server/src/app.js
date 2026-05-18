import express from "express";
import cors from "cors";
import connectDB from "./db.js";

import { envConfig } from "./configs/index.js";
import { logger, errorHandler } from "./middlewares/index.js";
import configureRouters from "./routers/index.js";

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use(logger);
configureRouters(app);
app.use(errorHandler);

app.listen(envConfig.PORT, () => {
  console.log(`Your app is running on PORT: ${envConfig.PORT}`);
});
