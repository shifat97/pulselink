import { NavLink } from "react-router";
import { useAuthType } from "../contexts/UseTypeContext";
import { getImageSrc } from "../constants/imagePath";
import { profilePicture } from "../constants/images";
import { dropDownIcon } from "../constants/icons";

export default function User() {
    const { isLogin } = useAuthType();

    return (
        <section>
            {!isLogin ? (
                <NavLink to="/registration">
                    <button className="bg-primary hover:bg-pm-hover px-36 py-10 rounded-full text-white text-18 font-outfit font-light cursor-pointer">
                        Create account
                    </button>
                </NavLink>
            ) : (
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
            )}
        </section>
    );
}
