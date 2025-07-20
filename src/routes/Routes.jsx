import { Route, Routes } from "react-router";
import App from "../App";
import Hero from "../components/Hero";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="" element={<App />}>
                <Route path="" element={<Hero />}></Route>
            </Route>
        </Routes>
    );
}
