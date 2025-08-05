import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { ToastContainer, toast } from "../constants/toast";
import axios from "axios";
import { setRegisteredUser } from "../constants/api";

const Registration = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegistrationForm = (e) => {
        e.preventDefault();

        const sendRegisterDataToDB = async () => {
            try {
                const response = await axios.post(setRegisteredUser(), {
                    fullName,
                    email,
                    password,
                });

                // Check if registration was successful
                if (response.status === 200 || response.status === 201) {
                    setFullName("");
                    setEmail("");
                    setPassword("");
                    navigate("/login");
                }
            } catch (e) {
                toast(e.message ?? "Something went wrong! Try again", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        };

        sendRegisterDataToDB();
    };

    return (
        <section className="registration my-[96px]">
            <ToastContainer />
            <div className="bg-white rounded-3xl shadow-xl max-w-[476px] mx-auto p-9">
                <h1 className="text-2xl text-gray1 font-semibold">
                    Create Account
                </h1>
                <p className="text-md text-gray1 mt-2">
                    Please sign up to book appointment
                </p>
                <form onSubmit={handleRegistrationForm}>
                    <div>
                        <label
                            className="text-md text-gray1 mt-2 block"
                            htmlFor="name"
                        >
                            Full Name
                        </label>
                        <input
                            onChange={(e) => setFullName(e.target.value)}
                            className="border border-gray1 rounded-md w-full px-4 py-2 mt-2"
                            type="text"
                            name="name"
                            id="name"
                        />
                    </div>
                    <div>
                        <label
                            className="text-md text-gray1 mt-2 block"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray1 rounded-md w-full px-4 py-2 mt-2"
                            type="email"
                            name="email"
                            id="email"
                        />
                    </div>
                    <div>
                        <label
                            className="text-md text-gray1 mt-2 block"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray1 rounded-md w-full px-4 py-2 mt-2"
                            type="password"
                            name="password"
                            id="password"
                        />
                    </div>
                    <input
                        className="w-full bg-primary hover:bg-pm-hover px-4 py-2 rounded-md mt-5 text-white cursor-pointer"
                        type="submit"
                        value="Create Account"
                    />
                </form>
                <p className="mt-9">
                    Already have an account?{" "}
                    <span className="underline text-primary cursor-pointer">
                        <NavLink to="/login">Login here</NavLink>
                    </span>
                </p>
            </div>
        </section>
    );
};

export default Registration;
