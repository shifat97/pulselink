import { profileImage, uploadArea } from "../constants/images";
import { useAuthType } from "../contexts/UseTypeContext";

export default function Profile() {
    const { loggedInUser } = useAuthType();
    const { fullName, email, phone, address, gender, birth_date } =
        loggedInUser;
    return (
        <section className="profile">
            <div className="flex items-center gap-4 mt-[50px]">
                <img
                    width={150}
                    className="rounded-xl"
                    src={profileImage}
                    alt=""
                />
                <img width={150} src={uploadArea} alt="" />
            </div>
            <div className="mt-5">
                <h1 className="text-3xl font-medium">{fullName}</h1>
                <div className="h-[1px] w-full bg-black/20 mt-2 md:w-[645px]"></div>
                <div>
                    <p className="text-black/30 text-16 mt-6 underline">
                        CONTACT INFORMATION
                    </p>
                    <table className="mt-5">
                        <tbody className="text-gray1">
                            <tr>
                                <td className="pt-2">Email:</td>
                                <td className="pl-[72px] text-blue1">
                                    {email}
                                </td>
                            </tr>
                            <tr>
                                <td className="pt-2">Phone:</td>
                                <td className="pl-[72px] text-blue1">
                                    {phone}
                                </td>
                            </tr>
                            <tr>
                                <td className="pt-2">Address:</td>
                                <td className="pl-[72px]">
                                    <span className="block">
                                        {address.street}
                                    </span>
                                    <span>
                                        {address.city + " " + address.country}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="text-black/30 text-16 mt-6 underline">
                        BASIC INFORMATION
                    </p>
                    <table className="mt-5">
                        <tbody className="text-gray1">
                            <tr>
                                <td className="pt-2">Gender:</td>
                                <td className="pl-[72px]">{gender}</td>
                            </tr>
                            <tr>
                                <td className="pt-2">Birthday:</td>
                                <td className="pl-[72px]">{birth_date}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mt-60 flex gap-2">
                <button className="border border-purple-700 rounded-full px-[40px] py-4 hover:bg-pm-hover hover:text-white cursor-pointer">
                    Edit
                </button>
                <button className="border border-purple-700 rounded-full px-[40px] py-4 hover:bg-pm-hover hover:text-white cursor-pointer">
                    Save Information
                </button>
            </div>
        </section>
    );
}
