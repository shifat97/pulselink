import AppointedDoctor from "../templates/AppointedDoctor";
import { getAllAppointments } from "../constants/api";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "../constants/toast";
import axios from "axios";

export default function MyAppointment() {
  const [appointmentData, setAppointmentData] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(getAllAppointments);

        if (response.status === 200 || response.status === 201) {
          setAppointmentData(response.data);
        }
      } catch (e) {
        toast(e.message ?? "Something went wrong");
      }
    };

    fetchAppointments();
  }, []);

  return (
    <section className="my-appointment mt-[150px]">
      <ToastContainer />
      <h1 className="text-2xl text-gray1 font-medium uppercase">
        My Appointments
      </h1>

      <div>
        {appointmentData.map((item, index) => (
          <AppointedDoctor doctor={item} key={index} />
        ))}
      </div>
    </section>
  );
}
