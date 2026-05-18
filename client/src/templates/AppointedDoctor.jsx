import axios from "axios";
import { useEffect, useState } from "react";
import { getDoctorById } from "../constants/api";
import { ToastContainer, toast } from "../constants/toast";
import { getImageSrc } from "../constants/imagePath";

export default function AppointedDoctor({ doctor }) {
  const [appointedDoctor, setAppointedDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctorById = async () => {
      try {
        const response = await axios.get(getDoctorById(doctor.doctorId));
        const data = await response.data;
        setAppointedDoctor(data[0]);
      } catch (e) {
        toast(e.message ?? "Error while fetching data!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    };

    fetchDoctorById();
  }, [doctor.doctorId]);

  return appointedDoctor ? (
    <div>
      <ToastContainer />
      <div className="h-[1px] w-full bg-black/20 mt-6"></div>
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4">
        <div className="flex flex-col gap-4 lg:flex-row mt-6">
          <div className="bg-purple2 rounded-xl">
            <img
              className="mx-auto lg:max-w-[160px] lg:h-full"
              src={getImageSrc(appointedDoctor.image)}
              alt={appointedDoctor.name}
            />
          </div>
          <div>
            <h1 className="text-2xl font-medium">{appointedDoctor.name}</h1>
            <p className="text-gray1 text-xl">{appointedDoctor.type}</p>
            <div className="mt-4">
              <h3 className="text-xl">Address:</h3>
              <p className="text-gray1 mt-1">
                <span className="block">{appointedDoctor.address.street}</span>
                <span>{appointedDoctor.address.area}</span>
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <h3 className="font-medium">Date & Time:</h3>
              <p className="text-gray1">
                {doctor.appointmentDay} | {doctor.appointmentTime}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button className="bg-primary hover:bg-pm-hover cursor-pointer text-white rounded-md w-full lg:w-[220px] py-2">
            {doctor.isPaid ? "Paid" : "Pay here"}
          </button>
          <button className="outline rounded-md w-full lg:w-[220px] py-2 cursor-pointer hover:bg-black hover:text-white">
            Cancel Appointment
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <p className="uppercase text-3xl text-center">Loading</p>
    </div>
  );
}
