import { Link, NavLink } from "react-router";
import { useAuthType } from "../contexts/UseTypeContext";
import { getImageSrc } from "../constants/imagePath";
import { profilePicture } from "../constants/images";
import { dropDownIcon } from "../constants/icons";
import { useState } from "react";

export default function User() {
  const { isLogin, changeUserLogout } = useAuthType();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleUserLogout = () => {
    changeUserLogout();
  };

  return (
    <section>
      {!isLogin ? (
        <NavLink to="/registration">
          <button className="bg-primary hover:bg-pm-hover px-36 py-10 rounded-full text-white text-18 font-outfit font-light cursor-pointer">
            Create account
          </button>
        </NavLink>
      ) : (
        <div className="relative" onClick={() => setToggleMenu(!toggleMenu)}>
          <div className="flex gap-4 items-center">
            <img
              width={49}
              height={49}
              className="rounded-full"
              src={getImageSrc(profilePicture)}
              alt=""
            />
            <img src={dropDownIcon} alt="" />
          </div>
          <div
            className={`absolute right-0 mt-8 bg-[#F8F8F8] p-4 rounded-md w-[218px] flex flex-col items-start gap-2 ${
              toggleMenu ? "block" : "hidden"
            }`}
          >
            <Link to="/profile">
              <p>My Profile</p>
            </Link>
            <Link to="/my-appointment">
              <p>My Appointments</p>
            </Link>

            <button onClick={handleUserLogout}>
              <p>Logout</p>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
