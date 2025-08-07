import { appointmentImage } from "../constants/images";

export default function BookAppointment() {
    return (
        <section className="bg-primary px-11 pt-11 rounded-xl mt-150 flex flex-col lg:flex-row items-center justify-evenly gap-4 lg:max-h-[455px]">
            <div className="max-w-[636px] lg:pb-11">
                <h1 className="text-white text-40 lg:text-52 font-bold text-center lg:text-left">
                    Book Appointment With 100+ Trusted Doctors
                </h1>
                <button className="mt-36 text-md lg:text-20 bg-white px-38 py-18 rounded-full mx-auto lg:mx-0 block">
                    Create Account
                </button>
            </div>
            <div className="mt-32 relative">
                <img
                    className="relative hidden lg:block lg:-top-[74px] max-w-[580px] max-h-[530px]"
                    src={appointmentImage}
                    alt=""
                />
            </div>
        </section>
    );
}
