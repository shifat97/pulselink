const filterByTopDoctor = "http://localhost:3000/doctors?isTopDoctor=true";
const filterByNotTopDoctor = "http://localhost:3000/doctors?isTopDoctor=false";

const getDoctorById = (id) => {
    return `http://localhost:3000/doctors?id=${id}`;
};

export { filterByTopDoctor, filterByNotTopDoctor, getDoctorById };
