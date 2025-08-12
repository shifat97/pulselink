import BookAppointment from "../components/BookAppiontment";
import Hero from "../components/Hero";
import Specialty from "../components/Specialty";
import TopDoctors from "../components/TopDoctors";
import { TypeProvider } from "../providers/TypeProvider";

export default function Home() {
  return (
    <section>
      <Hero />
      <TypeProvider>
        <Specialty />
        <TopDoctors />
      </TypeProvider>
      <BookAppointment />
    </section>
  );
}
