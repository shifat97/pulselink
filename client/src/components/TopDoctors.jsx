import axios from "axios";
import { useEffect, useState } from "react";
import { filterByTopDoctor, getTopDoctorByType } from "../constants/api";
import { ToastContainer, toast } from "../constants/toast";
import Doctor from "../templates/Doctor";
import { useType } from "../contexts/UseTypeContext";

export default function TopDoctors() {
  const [seeMore, setSeeMore] = useState(false);
  const [topDoctors, setTopDoctors] = useState([]);
  const [displayDoctors, setDisplayDoctors] = useState([]);
  const { selectedType } = useType();

  const handleSeeMoreButton = () => {
    setSeeMore(!seeMore);

    if (!seeMore) {
      setDisplayDoctors(topDoctors);
    } else {
      setDisplayDoctors(topDoctors.slice(0, 10));
    }
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        if (selectedType.toLowerCase() == "all") {
          const response = await axios.get(filterByTopDoctor);
          const data = response.data;
          setTopDoctors(data);
          setDisplayDoctors(data.slice(0, 10));
        } else {
          const response = await axios.get(getTopDoctorByType(selectedType));
          const data = response.data;
          setTopDoctors(data);
          setDisplayDoctors(data.slice(0, 10));
        }
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

    fetchDoctors();
  }, [selectedType]);

  return (
    <section className="mt-120">
      <ToastContainer />
      <h1 className="text-black1 text-30 lg:text-40 text-center font-medium">
        Top Doctors to Book
      </h1>
      <p className="text-md lg:text-18 text-center text-gray1 mt-10 max-w-[573px] mx-auto">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-26 mt-40">
        {displayDoctors.map((doctor, index) => (
          <Doctor key={index} doctor={doctor} />
        ))}
      </div>
      <div>
        <button
          onClick={handleSeeMoreButton}
          className="bg-purple1 py-18 px-80 rounded-full mt-60 block mx-auto cursor-pointer hover:bg-purple2"
        >
          {seeMore ? "See Less" : "See More"}
        </button>
      </div>
    </section>
  );
}
