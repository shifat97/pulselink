import { RouterNotImplementedError } from "../errors/index.js";
import { appointmentService } from "../services/index.js";

const createAppointment = async (req, res) => {
  try {
    const newAppointment = await appointmentService.createAppointment(req.body);

    res.status(201).json(newAppointment);
  } catch (e) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

const getAppointment = async (req, res) => {
  try {
    const appointments = await appointmentService.getAppointment();

    if (!appointments) {
      return res.status(404).json({ error: "No appointment found" });
    }

    res.status(200).json(appointments);
  } catch (e) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

const deleteAppointment = (req, res) => {
  throw new RouterNotImplementedError();
};

const updateAppointment = (req, res) => {
  throw new RouterNotImplementedError();
};

export { createAppointment, getAppointment };
