import { Link } from "react-router";
import { getImageSrc } from "../constants/imagePath";
import { useAuthType } from "../contexts/UseTypeContext";

const Doctor = ({ doctor }) => {
  const { _id, image, name, type, isAvailable } = doctor;
  const { loggedInUser } = useAuthType();
  const userId = loggedInUser._id;

  return (
    <Link
      to={`/doctors/doctor?id=${_id}&userId=${userId}`}
      className="block h-full"
    >
      <div className="h-full bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 group">
        {/* Image Container with Badge */}
        <div className="relative h-44 sm:h-48 bg-gradient-to-br from-purple-100 via-purple-50 to-blue-50 overflow-hidden">
          {/* Availability Badge */}
          <div
            className={`absolute top-3 right-3 z-10 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 backdrop-blur-sm ${
              isAvailable
                ? "bg-green-500/90 text-white"
                : "bg-gray-500/90 text-white"
            }`}
          >
            <span className="relative flex h-2 w-2">
              {isAvailable && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              )}
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            {isAvailable ? "Available" : "Unavailable"}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-purple-200/20 rounded-full"></div>
          <div className="absolute -left-8 -bottom-8 w-24 h-24 bg-blue-200/20 rounded-full"></div>

          {/* Doctor Image */}
          <div className="relative h-full flex items-end justify-center">
            <img
              src={getImageSrc(image)}
              alt={name}
              className="relative z-5 object-contain h-full w-auto max-w-full group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          {/* Doctor Name */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-purple-600 transition-colors">
            {name}
          </h3>

          {/* Specialty */}
          <div className="flex items-center gap-2 mb-3">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className="text-sm text-gray-600 font-medium">{type}</p>
          </div>

          {/* Action Button */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <button className="flex items-center gap-1 text-purple-600 font-semibold text-sm group-hover:gap-2 transition-all">
              <span>View</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Doctor;
