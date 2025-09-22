import { Route, Routes } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import AboutDoctor from "../pages/AboutDoctor";
import AllDoctors from "../pages/AllDoctors";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import MyAppointment from "../pages/MyAppointments";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="" element={<App />}>
        <Route path="" element={<Home />}></Route>
        <Route path="/all-doctors" element={<AllDoctors />}></Route>
        <Route path="/doctors/:doctorID" element={<AboutDoctor />}></Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route
          path="/profile/:_id"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="my-appointment"
          element={
            <ProtectedRoute>
              <MyAppointment />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}
