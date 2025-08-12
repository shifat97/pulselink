import { NavLink } from "react-router";
import { navLinks } from "../constants/navLinks";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-22">
      {navLinks.map((item, index) => (
        <NavLink key={index} to={item.to}>
          <span>{item.name}</span>
        </NavLink>
      ))}
    </nav>
  );
}
