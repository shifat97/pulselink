import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "../constants/toast";
import Doctor from "../templates/Doctor";
import { getDoctorByType } from "../constants/api";

export default function RelatedDoctor({ id, type }) {
  const [relatedDoctors, setRelatedDoctors] = useState([]);

  useEffect(() => {
    const fetchRelatedDoctor = async () => {
      try {
        const response = await axios.get(getDoctorByType(type));
        const data = await response.data.filter((doctor) => doctor.id !== id);

        setRelatedDoctors(data);
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

    fetchRelatedDoctor();
  }, [id, type]);

  return (
    <section className="related-doctor mt-[184px]">
      <h1 className="text-black1 text-30 lg:text-40 text-center font-medium">
        Related Doctors
      </h1>
      <p className="text-md lg:text-18 text-center text-gray1 mt-10 max-w-[573px] mx-auto">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-26 mt-40">
        {relatedDoctors.map((doctor, index) => (
          <Doctor key={index} doctor={doctor} />
        ))}
      </div>
    </section>
  );
}
