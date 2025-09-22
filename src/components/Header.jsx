import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Navbar from "./Navbar";
import User from "./User";
import { useState, useEffect } from "react";

export default function Header() {
  const [toggleHam, setToggleHam] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (toggleHam && !e.target.closest(".mobile-menu-container")) {
        setToggleHam(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [toggleHam]);

  return (
    <>
      <header
        className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-white py-4"
        }
      `}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="relative z-10">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <Navbar />
            </div>

            {/* Desktop User Menu */}
            <div className="hidden lg:block">
              <User />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden mobile-menu-container">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setToggleHam(!toggleHam);
                }}
                className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span
                    className={`block h-0.5 w-full bg-gray-800 transition-transform duration-300 ${
                      toggleHam ? "rotate-45 translate-y-2" : ""
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-full bg-gray-800 transition-opacity duration-300 ${
                      toggleHam ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-full bg-gray-800 transition-transform duration-300 ${
                      toggleHam ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  ></span>
                </div>
              </button>

              {/* Mobile Menu Dropdown */}
              <div
                className={`
                absolute right-0 top-full mt-2 w-72 
                bg-white rounded-2xl shadow-2xl border border-gray-100
                transition-all duration-300 transform origin-top-right
                ${
                  toggleHam
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }
              `}
              >
                <div className="p-4">
                  <Hamburger />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div
        className={`${
          isScrolled ? "h-16" : "h-20"
        } transition-all duration-300`}
      ></div>
    </>
  );
}
