import { contactImage } from "../constants/images";
import {
    office,
    road,
    city,
    country,
    phone,
    email,
} from "../constants/contactInfo";
import { Link } from "react-router";

export default function Contact() {
    return (
        <section className="contact">
            <h1 className="mt-20 text-gray1 text-center text-3xl uppercase">
                Contact <span className="text-black1 font-semibold">us</span>
            </h1>
            <div className="flex flex-col gap-6 lg:flex-row items-center mt-[88px]">
                <div>
                    <img
                        className="md:max-w-[560px] mx-auto"
                        src={contactImage}
                        alt=""
                    />
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl text-gray1 font-semibold uppercase">
                        Our Office
                    </h1>
                    <p className="text-16 text-gray1 mt-5">
                        <span className="block">{office}</span>
                        <span>{road + ", " + city + ", " + country}</span>
                    </p>
                    <p className="text-16 text-gray1 mt-5">
                        <span className="block">Tel: {phone}</span>
                        <span>Email: {email}</span>
                    </p>
                    <h1 className="text-2xl text-gray1 font-semibold uppercase mt-9">
                        Careers at PRESCRIPTO
                    </h1>
                    <p className="text-16 text-gray1 mt-5">
                        Learn more about our teams and job openings.
                    </p>
                    <Link to="">
                        <button className="border px-4 py-2 mt-5">
                            Explore Jobs
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
