import mongoose from "mongoose";
import { Appointment } from "../models/index.js";

export const createAppointment = async (appointmentData) => {
  const newAppointment = new Appointment(appointmentData);
  await newAppointment.save();
  return newAppointment;
}

export const getAppointment = async () => {
  return Appointment.find();
}