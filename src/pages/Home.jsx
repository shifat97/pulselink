import BookAppointment from "../components/BookAppiontment";
import Hero from "../components/Hero";
import Specialty from "../components/Specialty";
import TopDoctors from "../components/TopDoctors";

export default function Home() {
    return (
        <section>
            <Hero />
            <Specialty />
            <TopDoctors />
            <BookAppointment />
        </section>
    );
}
