import { Link, NavLink } from "react-router";
import { useAuthType } from "../contexts/UseTypeContext";
import { getImageSrc } from "../constants/imagePath";
import { profilePicture } from "../constants/images";
import { useState, useEffect, useRef } from "react";

export default function User() {
  const { isLogin, changeUserLogout } = useAuthType();
  const [toggleMenu, setToggleMenu] = useState(false);
  const { loggedInUser } = useAuthType();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleUserLogout = () => {
    changeUserLogout();
    setToggleMenu(false);
  };

  return (
    <section>
      {!isLogin ? (
        <NavLink to="/registration">
          <button
            className="
            bg-gradient-to-r from-purple-600 to-purple-700 
            hover:from-purple-700 hover:to-purple-800 
            px-6 py-2.5 rounded-full text-white font-medium
            transition-all duration-200 transform hover:scale-105
            shadow-md hover:shadow-lg
          "
          >
            Create account
          </button>
        </NavLink>
      ) : (
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            className="flex gap-3 items-center p-2 rounded-full hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="relative">
              <img
                width={40}
                height={40}
                className="rounded-full border-2 border-purple-100"
                src={getImageSrc(profilePicture)}
                alt="Profile"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <svg
              className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                toggleMenu ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          <div
            className={`
            absolute right-0 mt-2 w-72
            bg-white rounded-xl shadow-xl border border-gray-100
            transition-all duration-200 transform origin-top-right
            ${
              toggleMenu
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }
          `}
          >
            {/* User Info Header */}
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-sm font-semibold text-gray-900">
                Signed in as
              </p>
              <p className="text-sm text-gray-600 truncate">
                {loggedInUser?.email}
              </p>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              <Link
                to="/profile"
                onClick={() => setToggleMenu(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="font-medium">My Profile</span>
              </Link>

              <Link
                to="/my-appointment"
                onClick={() => setToggleMenu(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-medium">My Appointments</span>
              </Link>
            </div>

            {/* Logout */}
            <div className="border-t border-gray-100">
              <button
                onClick={handleUserLogout}
                className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
