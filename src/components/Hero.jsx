import { groupImages, heroImage } from "../constants/images";
import { arrow_right } from "../constants/icons";

export default function Hero() {
    return (
        <section className="bg-primary mt-26 p-45 lg:p-90 flex flex-col lg:flex-row items-center gap-22 rounded-sm">
            <div className="max-w-[726px]">
                <h1 className="text-white font-semibold font-outfit text-43 lg:text-63 text-center lg:text-left">
                    Book Appointment With Trusted Doctors
                </h1>
                <p className="flex flex-col lg:flex-row items-center gap-14 justify-center lg:justify-start mt-4">
                    <span>
                        <img src={groupImages} />
                    </span>
                    <span className="text-white font-outfit text-md lg:text-18 text-center lg:text-left">
                        Simply browse through our extensive list of trusted
                        doctors, schedule your appointment hassle-free.
                    </span>
                </p>
                <button className="flex items-center gap-12 bg-white rounded-full px-32 py-14 text-black/70 mx-auto lg:mx-0 mt-4 cursor-pointer">
                    <span>Book appointment</span>
                    <img src={arrow_right} />
                </button>
            </div>
            <div>
                <img src={heroImage} className="" />
            </div>
        </section>
    );
}
