import { Route, Routes } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import AboutDoctor from "../pages/AboutDoctor";
import AllDoctors from "../pages/AllDoctors";

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
            </Route>
        </Routes>
    );
}
