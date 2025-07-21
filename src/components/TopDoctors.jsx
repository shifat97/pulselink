import axios from "axios";
import { useEffect, useState } from "react";
import { filterByTopDoctor } from "../constants/api";
import { ToastContainer, toast } from "../constants/toast";

export default function TopDoctors() {
    const [topDoctors, setTopDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get(filterByTopDoctor);
                const data = response.data;
                setTopDoctors(data.slice(0, 10));
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
    }, []);

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
                {topDoctors.map((doctor, index) => (
                    <Doctor key={index} doctor={doctor} />
                ))}
            </div>
            <div>
                <button className="bg-purple1 py-18 px-80 rounded-full mt-60 block mx-auto cursor-pointer hover:bg-purple2">
                    See More
                </button>
            </div>
        </section>
    );
}

const Doctor = ({ doctor }) => {
    const { image, name, type, isAvailable } = doctor;
    return (
        <div className="rounded-xl border-1 border-purple2">
            <div className="bg-purple1 flex items-end justify-center w-full rounded-tl-xl rounded-tr-xl">
                <img src={image} alt={name} />
            </div>
            <div className="p-14">
                <p
                    className={`flex items-center gap-2 mt-0.5 ${
                        isAvailable ? "text-green-300" : "text-red-300"
                    }`}
                >
                    {" "}
                    <span
                        className={`w-[7.25px] h-[7.25px] rounded-full ${
                            isAvailable ? "bg-green-300" : "bg-red-300"
                        }`}
                    ></span>{" "}
                    {isAvailable ? "Available" : "Not Available"}
                </p>
                <h3 className="text-22 text-black1 mt-10 font-medium">
                    {name}
                </h3>
                <p className="text-gray1 mt-2">{type}</p>
            </div>
        </div>
    );
};
