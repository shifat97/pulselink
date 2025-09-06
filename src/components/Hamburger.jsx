import { NavLink } from "react-router";
import { navLinks } from "../constants/navLinks";
import { useAuthType } from "../contexts/UseTypeContext";

export default function Hamburger() {
  const { isLogin, changeUserLogout } = useAuthType();

  const handleUserLogout = () => {
    changeUserLogout();
  };

  return (
    <nav className="flex flex-col">
      {/* Navigation Links */}
      <div className="space-y-1 pb-4 border-b border-gray-100">
        {navLinks.map((item, index) => (
          <NavLink 
            key={index} 
            to={item.to}
            className={({ isActive }) => `
              block px-4 py-3 rounded-lg font-medium transition-all duration-200
              ${isActive 
                ? 'text-purple-600 bg-purple-50' 
                : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
              }
            `}
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* User Section */}
      <div className="pt-4">
        {!isLogin ? (
          <NavLink 
            to="/registration"
            className="block w-full"
          >
            <button className="
              w-full bg-gradient-to-r from-purple-600 to-purple-700 
              hover:from-purple-700 hover:to-purple-800 
              px-6 py-3 rounded-lg text-white font-medium
              transition-all duration-200 shadow-md hover:shadow-lg
            ">
              Create account
            </button>
          </NavLink>
        ) : (
          <div className="space-y-2">
            <NavLink 
              to="/profile"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors rounded-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="font-medium">My Profile</span>
            </NavLink>

            <NavLink 
              to="/my-appointment"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors rounded-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">My Appointments</span>
            </NavLink>

            <button 
              onClick={handleUserLogout}
              className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 transition-colors rounded-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span className="font-medium">Logout</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}