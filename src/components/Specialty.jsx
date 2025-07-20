import { doctors } from "../constants/doctors";

export default function Specialty() {
    return (
        <section className="mt-120">
            <h1 className="text-black1 text-30 lg:text-40 text-center font-medium">
                Find by Specialty
            </h1>
            <p className="text-md lg:text-18 text-center text-gray1 mt-10 max-w-[573px] mx-auto">
                Simply browse through our extensive list of trusted doctors,
                schedule your appointment hassle-free.
            </p>
            <div className="flex items-center justify-center gap-22 overflow-x-auto scroll-smooth touch-auto scrollbar-hide px-4 mt-44 lg:mt-64">
                {doctors.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 flex flex-col items-center justify-center min-w-[100px]"
                    >
                        <img
                            src={item.icons}
                            alt={item.name}
                            className="w-16 h-16 lg:w-auto lg:h-auto"
                        />
                        <p className="mt-2 lg:mt-6 text-center text-md lg:text-18 text-gray1">
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
