import { Link } from "react-router";
import { getImageSrc } from "../constants/imagePath";

const Doctor = ({ doctor }) => {
  const { id, image, name, type, isAvailable } = doctor;

  return (
    <Link to={`/doctors/${id}`}>
      <div className="rounded-xl border-1 border-purple2">
        <div className="bg-purple1 flex items-end justify-center w-full rounded-tl-xl rounded-tr-xl">
          <img src={getImageSrc(image)} alt={name} />
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
          <h3 className="text-22 text-black1 mt-10 font-medium">{name}</h3>
          <p className="text-gray1 mt-2">{type}</p>
        </div>
      </div>
    </Link>
  );
};

export default Doctor;
