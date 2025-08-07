import { NavLink } from "react-router";

export default function User() {
    return (
        <section>
            <NavLink to="/registration">
                <button className="bg-primary hover:bg-pm-hover px-36 py-10 rounded-full text-white text-18 font-outfit font-light cursor-pointer">
                    Create account
                </button>
            </NavLink>
        </section>
    );
}
