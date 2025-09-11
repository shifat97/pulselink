const allDoctors = "http://localhost:5000/doctors";
const filterByTopDoctor = "http://localhost:3000/doctors?isTopDoctor=true";
const filterByNotTopDoctor = "http://localhost:3000/doctors?isTopDoctor=false";

const getDoctorById = (id) => {
  return `http://localhost:3000/doctors?id=${id}`;
};

const getDoctorByType = (type) => {
  return `http://localhost:5000/doctors?type=${type}`;
};

const getTopDoctorByType = (type) => {
  return `http://localhost:3000/doctors?isTopDoctor=true&type=${type}`;
};

const setRegisteredUser = () => {
  return "http://localhost:3000/users";
};

const updateUserInformation = (id) => {
  return `http://localhost:3000/users/${id}`;
};

const setAllAppointments = "http://localhost:3000/appointments";
const getAllAppointments = "http://localhost:3000/appointments";

export {
  allDoctors,
  filterByTopDoctor,
  filterByNotTopDoctor,
  getDoctorById,
  getDoctorByType,
  getTopDoctorByType,
  setRegisteredUser,
  updateUserInformation,
  setAllAppointments,
  getAllAppointments,
};
