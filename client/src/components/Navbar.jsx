import { NavLink } from "react-router";
import { navLinks } from "../constants/navLinks";

export default function Navbar() {
  return (
    <nav className="flex items-center">
      <ul className="flex items-center gap-1">
        {navLinks.map((item, index) => (
          <li key={index}>
            <NavLink 
              to={item.to}
              className={({ isActive }) => `
                relative px-5 py-2.5 rounded-lg font-medium text-sm lg:text-base transition-all duration-200
                ${isActive 
                  ? 'text-purple-600 bg-purple-50' 
                  : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
                }
                group
              `}
            >
              <span className="relative z-10">{item.name}</span>
              
              {/* Hover/Active indicator */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-8"></span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}