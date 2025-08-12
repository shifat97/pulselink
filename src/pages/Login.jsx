import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { setRegisteredUser } from "../constants/api";
import { ToastContainer, toast } from "../constants/toast";
import { useAuthType } from "../contexts/UseTypeContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { changeUserLogin } = useAuthType();
  const navigate = useNavigate();

  const handleLoginButton = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(setRegisteredUser());
      const data = await response.data;

      if (data) {
        const getUser = data.find(
          (user) => user.email === email && user.password === password
        );

        if (getUser) {
          changeUserLogin(getUser);
          navigate("/");
        } else {
          toast("Invalid email or password");
        }
      }
    } catch (e) {
      toast(e.message ?? "Something went wrong. Try again later");
    }
  };

  return (
    <section className="registration my-[96px]">
      <ToastContainer></ToastContainer>
      <div className="bg-white rounded-3xl shadow-xl max-w-[476px] mx-auto p-9">
        <h1 className="text-2xl text-gray1 font-semibold">Login</h1>
        <p className="text-md text-gray1 mt-2">
          Please login to book appointment
        </p>
        <form onSubmit={handleLoginButton}>
          <div>
            <label className="text-md text-gray1 mt-2 block" htmlFor="email">
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
            <label className="text-md text-gray1 mt-2 block" htmlFor="password">
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
            value="Login"
          />
        </form>
        <p className="mt-9">
          Don't have any account?{" "}
          <span className="underline text-primary cursor-pointer">
            <NavLink to="/registration">Create Here</NavLink>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;
