import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./providers/AuthProvider";

function App() {
    return (
        <main className="font-poppins bg-white min-h-screen 2xl:max-w-[1536px] m-2 2xl:mx-auto">
            <AuthProvider>
                <Header />
                <Outlet />
                <Footer />
            </AuthProvider>
        </main>
    );
}

export default App;
