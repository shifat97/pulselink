import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { ToastContainer, toast } from "../constants/toast";
import { getDoctorById, setAllAppointments } from "../constants/api";
import { getImageSrc } from "../constants/imagePath";
import { verifiedIcon, infoIcon } from "../constants/icons";
import RelatedDoctor from "../components/RelatedDoctor";
import { useAuthType } from "../contexts/UseTypeContext";

let appointmentDay;
let appointmentTime;

export default function AboutDoctor() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const [doctorData, setDoctorData] = useState(null);
  const navigate = useNavigate();
  const { isLogin, loggedInUser } = useAuthType();

  useEffect(() => {
    if (!id) return;

    const fetchDoctorById = async () => {
      try {
        const response = await axios.get(getDoctorById(id));
        const data = response.data;
        setDoctorData(data);
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
  }, [id]);

  const handleBookAppointmentButton = async () => {
    if (!isLogin) {
      navigate("/login");
      return;
    }

    try {
      const response = await axios.post(setAllAppointments, {
        userId: loggedInUser.id,
        doctorId: id,
        doctorName: doctorData.name,
        doctorType: doctorData.type,
        doctorAddress: doctorData.address,
        appointmentDay,
        appointmentTime,
      });

      if (response.status === 200 || response.status === 201) {
        toast("Appointment booked successfully");
      }
    } catch (e) {
      toast(e.message ?? "Something went wrong");
    }
  };

  return (
    <section className="mt-36">
      <ToastContainer />
      <div>
        {doctorData ? (
          <div>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="bg-primary flex justify-center items-center rounded-xl lg:items-end lg:max-h-[376px] shrink-0">
                <img
                  className="max-h-[376px]"
                  src={getImageSrc(doctorData.image)}
                  alt={doctorData.name}
                />
              </div>
              <div>
                <div className="h-[376px] border border-black/50 rounded-xl px-6 lg:px-44 flex flex-col justify-center">
                  <h2 className="flex items-center gap-4">
                    <span className="text-30 lg:text-36 font-medium">
                      {doctorData.name}
                    </span>
                    <span>
                      <img src={verifiedIcon} alt="" />
                    </span>
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <p className="text-gray1 text-18 lg:text-20">
                      {doctorData.degrees.map((degree, index) => (
                        <span key={index}>
                          {degree}
                          {""}
                          {index === doctorData.degrees.length - 1 ? "" : ", "}
                        </span>
                      ))}
                      <span> - {doctorData.type}</span>
                    </p>
                    <p className="rounded-[43px] text-gray1 border border-gray1 px-3.5 py-1.5">
                      {doctorData.yearsOfExperience} Years
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-5">
                    <h3 className="text-black1 text-18 font-medium ">About</h3>
                    <img src={infoIcon} />
                  </div>
                  <p className="text-gray1 text-md lg:text-18 mt-3.5">
                    {doctorData.description}
                  </p>
                  <h2 className="text-gray1 text-22 mt-7">
                    Appointment fee:{" "}
                    <span className="text-black1">
                      ${doctorData.appointmentFee}
                    </span>
                  </h2>
                </div>
                <div className="mt-6">
                  <h4 className="text-gray1 font-medium text-2xl">
                    Booking slots:
                  </h4>
                  <div className="flex items-center gap-2 flex-wrap">
                    {doctorData.bookingDays.map((day, index) => (
                      <GenerateBookingDay key={index} day={day} />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {doctorData.bookingTimes.map((time, index) => (
                      <GenerateBookingTime key={index} time={time} />
                    ))}
                  </div>
                </div>
                <button
                  onClick={handleBookAppointmentButton}
                  className="bg-primary hover:bg-pm-hover cursor-pointer text-white rounded-full px-[100px] py-4 mt-9"
                >
                  Book an appointment
                </button>
              </div>
            </div>
            <section>
              <RelatedDoctor id={doctorData.id} type={doctorData.type} />
            </section>
          </div>
        ) : (
          <p>Loading doctor info...</p>
        )}
      </div>
    </section>
  );
}

const GenerateBookingDay = ({ day }) => {
  const [isDaySelectedTrue, setIsDaySelectedTrue] = useState(false);

  if (isDaySelectedTrue) appointmentDay = day;

  return (
    <button
      onClick={() => setIsDaySelectedTrue(!isDaySelectedTrue)}
      className={`rounded-full font-medium w-[87px] py-4 mt-5 ${isDaySelectedTrue ? "bg-primary text-white" : "border border-gray1"
        }`}
    >
      {day}
    </button>
  );
};

const GenerateBookingTime = ({ time }) => {
  const [isTimeSelected, setIsTimeSelected] = useState(false);

  if (isTimeSelected) appointmentTime = time;

  return (
    <button
      onClick={() => setIsTimeSelected(!isTimeSelected)}
      className={`rounded-full font-medium px-8 py-3 mt-7 ${isTimeSelected ? "bg-primary text-white" : "border border-gray1"
        }`}
    >
      {time}
    </button>
  );
};
