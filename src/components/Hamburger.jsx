import { Link } from "react-router";
import { navLinks } from "../constants/navLinks";

export default function Hamburger() {
    return (
        <nav className="flex flex-col items-center gap-10">
            {navLinks.map((item, index) => (
                <Link key={index} to={item.to}>
                    <span>{item.name}</span>
                </Link>
            ))}
        </nav>
    );
}
