import { useEffect, useState } from "react";
import { doctors } from "../constants/doctors";
import axios from "axios";
import { allDoctors, getDoctorByType } from "../constants/api";
import { ToastContainer, toast } from "../constants/toast";
import Doctor from "../templates/Doctor";

export default function AllDoctors() {
  const [doctorsData, setDoctorsData] = useState([]);
  const [doctorType, setDoctorType] = useState("All");

  const handleDoctorType = (type) => setDoctorType(type);

  useEffect(() => {
    const fetchAllDoctors = async () => {
      try {
        let apiToCall;
        if (doctorType === "All") {
          apiToCall = allDoctors;
        } else {
          apiToCall = getDoctorByType(doctorType);
        }

        const response = await axios.get(apiToCall);
        const data = await response.data;
        setDoctorsData(data);
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

    fetchAllDoctors();
  }, [doctorType]);

  return (
    <section className="all-doctors mt-60">
      <ToastContainer />
      <h3 className="text-18 lg:text-20 text-gray1">
        Browse through the doctors specialist.
      </h3>
      <div className="mt-9 flex flex-col gap-6 lg:flex-row">
        <div className="flex lg:flex-col gap-2 flex-wrap">
          <button
            onClick={() => handleDoctorType("All")}
            className="block text-gray1 border-1 border-black/30 rounded-md px-4 py-2 hover:bg-purple3 cursor-pointer"
          >
            All
          </button>
          {doctors.map((category, index) => (
            <GenerateDoctorCategory
              key={index}
              category={category}
              handleDoctorType={handleDoctorType}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-9">
          {doctorsData.map((doctor, item) => (
            <Doctor key={item} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}

const GenerateDoctorCategory = ({ category, handleDoctorType }) => {
  return (
    <button
      onClick={() => handleDoctorType(category.name)}
      className="block text-gray1 border-1 border-black/30 rounded-md px-4 py-2 hover:bg-purple3 cursor-pointer"
    >
      {category.name}
    </button>
  );
};
