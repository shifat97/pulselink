import mongoose from "mongoose";

const doctorModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    isTopDoctor: {
      type: Boolean,
      default: false,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
      default: "",
    },
    degrees: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    yearsOfExperience: {
      type: Number,
      required: true,
    },
    appointmentFee: {
      type: Number,
      required: true,
    },
    address: {
      type: Object,
      required: true,
    },
    bookingDays: {
      type: Array,
      required: true,
    },
    bookingTimes: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const Doctor = mongoose.model("Doctor", doctorModel);

export default Doctor;
