import mongoose from "mongoose";
import { Doctor } from "../models/index.js";

export const createDoctor = async (doctorData) => {
  const newDoctor = new Doctor(doctorData);
  await newDoctor.save();
  return newDoctor;
};

export const getAllDoctors = async () => {
  return Doctor.find();
};

export const getDoctorById = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return null;
  }
  return Doctor.findById(id);
};

export const getTopDoctor = async () => {
  return Doctor.find({ isTopDoctor: true });
}

export const getDoctorsByType = async (type) => {
  return Doctor.find({ type })
}

export const getTopDoctorByType = async (type, isTopDoctor) => {
  return Doctor.find({
    $and: [
      { type: type },
      { isTopDoctor: isTopDoctor }
    ]
  })
}