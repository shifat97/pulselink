import mongoose from "mongoose";
import z from "zod";

const errorHandler = (error, req, res, next) => {
  // Zod
  if (error instanceof z.ZodError) {
    return res.status(400).json({
      status: "error",
      message: JSON.parse(error.message) || "Validation Error",
    });
  }

  // Mongoose
  if (error instanceof mongoose.Error.ValidationError) {
    return res.status(400).json({
      status: "error",
      message: error.message || "Validation Error",
    });
  }

  console.error(
    `[${new Date().toISOString()}]: ERROR ~ ${req.method} ~ ${req.url} ~ ${
      error.message
    }`
  );

  res.status(error.status || 500).json({
    status: "error",
    message: error.message || "Internal Server Error",
  });
};

export default errorHandler;
