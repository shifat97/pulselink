import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Navbar from "./Navbar";
import User from "./User";
import { menu } from "../constants/icons";
import { useState } from "react";

export default function Header() {
    const [toggleHam, setToggleHam] = useState(false);

    return (
        <header className="flex items-center justify-between w-ful border-b-2 border-black/20 pb-18">
            <Logo />
            <div className="hidden lg:block">
                <Navbar />
            </div>
            <div className="lg:hidden relative">
                <img src={menu} onClick={() => setToggleHam(!toggleHam)} />
                <div
                    className={`${
                        toggleHam ? "block" : "hidden"
                    } bg-gray-50 absolute right-0 top-15 w-[218px] rounded-sm p-2 z-100`}
                >
                    <Hamburger />
                </div>
            </div>
            <div className="hidden lg:block">
                <User />
            </div>
        </header>
    );
}
