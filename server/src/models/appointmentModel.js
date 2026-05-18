import mongoose, { Schema } from "mongoose";

const appointmentSchema = new Schema( // Renamed for clarity
  {
    // Reference to the User model
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User", // This string MUST match the name of your User model
      required: true,
    },
    // Reference to the Doctor model
    doctorId: {
      type: Schema.Types.ObjectId,
      ref: "Doctor", // This string MUST match the name of your Doctor model
      required: true,
    },
    appointmentDay: {
      type: String,
      required: true,
    },
    appointmentTime: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
