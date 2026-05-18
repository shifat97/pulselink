import { RouterNotImplementedError } from "../errors/index.js";
import { doctorService } from "../services/index.js";

const createDoctor = async (req, res, next) => {
  try {
    const newDoctor = await doctorService.createDoctor(req.body);
    res.status(201).json(newDoctor);
  } catch (err) {
    next(err); // Pass error to error handler
  }
};

const getDoctors = async (req, res, next) => {
  try {
    res.status(200).json(await doctorService.getAllDoctors());
  } catch (err) {
    next(err);
  }
};

const getDoctorByParameter = async (req, res) => {
  try {
    const { id, type, isTopDoctor } = req.query;
    let doctor;

    if (id) {
      doctor = await doctorService.getDoctorById(id);
    } else if (type && !isTopDoctor) {
      doctor = await doctorService.getDoctorsByType(type);
    } else if (type && isTopDoctor) {
      doctor = await doctorService.getTopDoctorByType(type, isTopDoctor);
    }

    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }

    res.status(200).json(doctor);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

const getTopDoctors = async (req, res) => {
  try {
    const topDoctors = await doctorService.getTopDoctor();
    res.status(200).json(topDoctors);
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}

const deleteProduct = (req, res) => {
  throw new RouterNotImplementedError();
};

const updateProduct = (req, res) => {
  throw new RouterNotImplementedError();
};

export { createDoctor, getDoctors, getDoctorByParameter, getTopDoctors };
