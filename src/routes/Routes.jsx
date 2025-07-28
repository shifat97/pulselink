import { Route, Routes } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import AboutDoctor from "../pages/AboutDoctor";
import AllDoctors from "../pages/AllDoctors";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="" element={<App />}>
                <Route path="" element={<Home />}></Route>
                <Route path="/all-doctors" element={<AllDoctors />}></Route>
                <Route
                    path="/doctors/:doctorID"
                    element={<AboutDoctor />}
                ></Route>
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="profile" element={<Profile />} />
            </Route>
        </Routes>
    );
}
