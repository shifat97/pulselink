const allDoctors = "http://localhost:5000/doctors";
const filterByTopDoctor = "http://localhost:5000/doctors/top";

const getDoctorById = (id) => `http://localhost:5000/doctors/doctor?id=${id}`;
const getDoctorByType = (type) => `http://localhost:5000/doctors?type=${type}`;
const getTopDoctorByType = (type) => `http://localhost:3000/doctors?isTopDoctor=true&type=${type}`;


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
  getDoctorById,
  getDoctorByType,
  getTopDoctorByType,
  setRegisteredUser,
  updateUserInformation,
  setAllAppointments,
  getAllAppointments,
};
