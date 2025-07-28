import { profileImage, uploadArea } from "../constants/images";

export default function Profile() {
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
                <h1 className="text-3xl font-medium">Edward Vincent</h1>
                <div className="h-[1px] w-full bg-black/20 mt-2"></div>
                <div>
                    <p className="text-black/30 text-16 mt-6 underline">
                        CONTACT INFORMATION
                    </p>
                    <table className="mt-5">
                        <tbody className="text-gray1">
                            <tr>
                                <td className="pt-2">Email:</td>
                                <td className="pl-[72px] text-blue1">
                                    richardjameswap@gmail.com
                                </td>
                            </tr>
                            <tr>
                                <td className="pt-2">Phone:</td>
                                <td className="pl-[72px] text-blue1">
                                    +1 123 456 7890
                                </td>
                            </tr>
                            <tr>
                                <td className="pt-2">Address:</td>
                                <td className="pl-[72px]">
                                    <span className="block">
                                        57th Cross, Richmond
                                    </span>
                                    <span>Circle, Church Road, London</span>
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
                                <td className="pl-[72px]">Male</td>
                            </tr>
                            <tr>
                                <td className="pt-2">Birthday:</td>
                                <td className="pl-[72px]">20 July, 2024</td>
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
