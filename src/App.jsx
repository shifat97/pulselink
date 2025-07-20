import { Outlet } from "react-router";
import Header from "./components/Header";

function App() {
    return (
        <main className="font-poppins bg-white min-h-screen 2xl:max-w-[1536px] m-2 2xl:mx-auto">
            <Header />
            <Outlet />
            <footer>Footer</footer>
        </main>
    );
}

export default App;
