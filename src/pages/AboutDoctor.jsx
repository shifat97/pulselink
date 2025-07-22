import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ToastContainer, toast } from "../constants/toast";
import { getDoctorById } from "../constants/api";
import { getImageSrc } from "../constants/imagePath";

export default function AboutDoctor() {
    const { doctorID } = useParams();
    const [doctorData, setDoctorData] = useState(null);

    useEffect(() => {
        if (!doctorID) return;

        const fetchDoctorById = async () => {
            try {
                const response = await axios.get(getDoctorById(doctorID));
                const data = response.data[0];
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
    }, [doctorID]);

    return (
        <section>
            <ToastContainer />
            <div>
                {doctorData ? (
                    <div>
                        <img
                            src={getImageSrc(doctorData.image)}
                            alt={doctorData.name}
                        />
                        <h2>{doctorData.name}</h2>
                        <p>{doctorData.type}</p>
                    </div>
                ) : (
                    <p>Loading doctor info...</p>
                )}
            </div>
        </section>
    );
}
