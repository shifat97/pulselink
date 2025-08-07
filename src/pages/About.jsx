import WhyChooseUs from "../components/WhyChooseUs";
import { aboutImage } from "../constants/images";

export default function About() {
    return (
        <section className="about">
            <h1 className="mt-20 text-gray1 text-center text-3xl uppercase">
                About <span className="text-black1 font-semibold">us</span>
            </h1>
            <div className="flex flex-col gap-6 lg:flex-row mt-9 items-center">
                <div>
                    <img
                        className="max-w-[470px] mx-auto"
                        src={aboutImage}
                        alt=""
                    />
                </div>
                <div className="text-gray1 font-light">
                    <p>
                        Welcome to Prescripto, your trusted partner in managing
                        your healthcare needs conveniently and efficiently. At
                        Prescripto, we understand the challenges individuals
                        face when it comes to scheduling doctor appointments and
                        managing their health records.
                        <span className="block mt-4">
                            Prescripto is committed to excellence in healthcare
                            technology. We continuously strive to enhance our
                            platform, integrating the latest advancements to
                            improve user experience and deliver superior
                            service. Whether you're booking your first
                            appointment or managing ongoing care, Prescripto is
                            here to support you every step of the way.
                        </span>
                    </p>
                    <div>
                        <h4 className="font-semibold mt-9 mb-6">Our Vision</h4>
                        <p>
                            Our vision at Prescripto is to create a seamless
                            healthcare experience for every user. We aim to
                            bridge the gap between patients and healthcare
                            providers, making it easier for you to access the
                            care you need, when you need it.
                        </p>
                    </div>
                </div>
            </div>
            <WhyChooseUs />
        </section>
    );
}
