import { useEffect, useState } from "react";
import { doctors } from "../constants/doctors";
import axios from "axios";
import { allDoctors } from "../constants/api";
import { ToastContainer, toast } from "../constants/toast";
import Doctor from "../templates/Doctor";

export default function AllDoctors() {
  const [doctorsData, setDoctorsData] = useState([]);
  const [doctorType, setDoctorType] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDoctorType = (type) => setDoctorType(type);

  useEffect(() => {
    const fetchAllDoctors = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(allDoctors);
        const data = await response.data;
        
        if (doctorType == 'All') {
          setDoctorsData(data);
        } else {
          const filteredDoctors = data.filter(d => d.type == doctorType);
          setDoctorsData(filteredDoctors);
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
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllDoctors();
  }, [doctorType]);

  const filteredDoctors = doctorsData.filter(doctor => 
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const specialtyIcons = {
    "All": "🏥",
    "Cardiologist": "❤️",
    "Dermatologist": "🔬",
    "Pediatrician": "👶",
    "Orthopedic": "🦴",
    "Neurologist": "🧠",
    "Psychiatrist": "🧘",
    "Dentist": "🦷",
    "Ophthalmologist": "👁️",
    "ENT Specialist": "👂",
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <ToastContainer />
      
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Find Your Perfect Healthcare Provider
            </h1>
            <p className="text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Connect with top-rated specialists in your area. Book appointments instantly.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search doctors by name or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pr-12 text-gray-900 bg-white rounded-full shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300 placeholder-gray-500"
                />
                <svg 
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative circles */}
        <div className="absolute -top-4 -right-4 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white opacity-10 rounded-full"></div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white shadow-sm border-b">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">{filteredDoctors.length}</p>
                <p className="text-sm text-gray-600">Doctors Found</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
              <div className="hidden sm:block text-center">
                <p className="text-2xl font-bold text-green-600">
                  {filteredDoctors.filter(d => d.isAvailable).length}
                </p>
                <p className="text-sm text-gray-600">Available Now</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="hidden sm:inline">Showing:</span>
              <span className="font-semibold text-purple-600">
                {doctorType === "All" ? "All Specialties" : doctorType}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-200">
                <span className="font-medium text-gray-900">Filter by Specialty</span>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 space-y-2">
                <FilterButtons 
                  doctorType={doctorType}
                  handleDoctorType={handleDoctorType}
                  specialtyIcons={specialtyIcons}
                />
              </div>
            </details>
          </div>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block lg:w-72 shrink-0">
            <div className="sticky top-4">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  Filter by Specialty
                </h3>
                <div className="space-y-2">
                  <FilterButtons 
                    doctorType={doctorType}
                    handleDoctorType={handleDoctorType}
                    specialtyIcons={specialtyIcons}
                  />
                </div>
              </div>

              {/* Quick Stats Card */}
              <div className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
                <h4 className="font-semibold mb-3">Quick Stats</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-purple-100">Total Doctors</span>
                    <span className="font-bold">{doctorsData.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-100">Available</span>
                    <span className="font-bold">{doctorsData.filter(d => d.isAvailable).length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-100">Specialties</span>
                    <span className="font-bold">{doctors.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Grid */}
          <main className="flex-1">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {[...Array(6)].map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            ) : filteredDoctors.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No doctors found</h3>
                <p className="text-gray-600 mb-6">
                  {searchTerm 
                    ? `No results for "${searchTerm}". Try adjusting your search.`
                    : "Try selecting a different specialty or check back later."}
                </p>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                  >
                    Clear Search
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {filteredDoctors.map((doctor, index) => (
                  <Doctor key={doctor.id || index} doctor={doctor} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}

const FilterButtons = ({ doctorType, handleDoctorType, specialtyIcons }) => {
  const allCategories = [{ name: "All" }, ...doctors];
  
  return (
    <>
      {allCategories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleDoctorType(category.name)}
          className={`
            w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200
            ${doctorType === category.name 
              ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-md transform scale-[1.02]" 
              : "bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-purple-600"
            }
          `}
        >
          <span className="text-xl">{specialtyIcons[category.name] || "🏥"}</span>
          <span className="flex-1 text-left">{category.name}</span>
          {doctorType === category.name && (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      ))}
    </>
  );
};

const SkeletonCard = () => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
    <div className="h-48 bg-gray-200"></div>
    <div className="p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
        <div className="h-4 bg-gray-300 rounded w-20"></div>
      </div>
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  </div>
);