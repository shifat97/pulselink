import { useState } from "react";
import { profileImage, uploadArea } from "../constants/images";
import { useAuthType } from "../contexts/UseTypeContext";
import axios from "axios";
import { updateUserInformation } from "../constants/api";
import { toast, ToastContainer } from "../constants/toast";

export default function Profile() {
  const [isEdit, setIsEdit] = useState(false);
  const [updatePhone, setUpdatePhone] = useState("Not given");
  const [updateStreet, setUpdateStreet] = useState("Not given");
  const [updateCity, setUpdateCity] = useState("Not given");
  const [updateCountry, setUpdateCountry] = useState("Not given");
  const [updateGender, setUpdateGender] = useState("Not given");
  const [updateBirthDate, setUpdateBirthDate] = useState("Not given");

  const { loggedInUser } = useAuthType();
  const _id = loggedInUser?._id;
  const name = loggedInUser?.name;
  const email = loggedInUser?.email;

  const handleSaveInformation = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(updateUserInformation(_id), {
        fullName: name,
        email: email,
        phone: updatePhone,
        address: {
          street: updateStreet,
          city: updateCity,
          country: updateCountry,
        },
        gender: updateGender,
        birth_date: updateBirthDate,
      });

      toast("Update Successful");
    } catch (e) {
      toast(e.message ?? "Update failed. Try again!");
    }
  };

  return (
    <section className="profile">
      <ToastContainer />
      <div className="flex items-center gap-4 mt-[50px]">
        <img width={150} className="rounded-xl" src={profileImage} alt="" />
        <img width={150} src={uploadArea} alt="" />
      </div>
      <div className="mt-5">
        <h1 className="text-3xl font-medium">{name}</h1>
        <div className="h-[1px] w-full bg-black/20 mt-2 md:w-[645px]"></div>
        <div>
          <p className="text-black/30 text-16 mt-6 underline">
            CONTACT INFORMATION
          </p>
          <table className="mt-5">
            <tbody className="text-gray1">
              <tr>
                <td>Email:</td>
                <td className="text-blue1 pl-[72px]">{email}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                {isEdit ? (
                  <td>
                    <input
                      className="ml-[72px] border-b-1 focus:outline-none focus:ring-0"
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder={`Change: Value`}
                      onChange={(e) => setUpdatePhone(e.target.value)}
                    />
                  </td>
                ) : (
                  <td className="text-blue1 pl-[72px]">{`Change: Value`}</td>
                )}
              </tr>
              <tr>
                <td>Address:</td>
                <td className={`${isEdit ? "" : "pl-[72px]"}`}>
                  {isEdit ? (
                    <>
                      <input
                        className="ml-[72px] border-b-1 focus:outline-none focus:ring-0"
                        type="text"
                        name="street"
                        id="street"
                        placeholder={`Change: Value`}
                        onChange={(e) => setUpdateStreet(e.target.value)}
                      />
                      <input
                        className="ml-[72px] border-b-1 focus:outline-none focus:ring-0"
                        type="text"
                        name="city"
                        id="city"
                        placeholder={`Change: Value`}
                        onChange={(e) => setUpdateCity(e.target.value)}
                      />
                      <input
                        className="ml-[72px] border-b-1 focus:outline-none focus:ring-0"
                        type="text"
                        name="country"
                        id="country"
                        placeholder={`Change: Value`}
                        onChange={(e) => setUpdateCountry(e.target.value)}
                      />
                    </>
                  ) : (
                    <>
                      <span className="block">{`Change: Value`}</span>

                      <span>{`Change: Value`}</span>
                    </>
                  )}
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
                <td>Gender:</td>
                {isEdit ? (
                  <td>
                    <input
                      className="ml-[72px] border-b-1 focus:outline-none focus:ring-0"
                      type="text"
                      name="gender"
                      id="gender"
                      placeholder={`Change: Value`}
                      onChange={(e) => setUpdateGender(e.target.value)}
                    />
                  </td>
                ) : (
                  <td className="pl-[72px]">{`Change: Value`}</td>
                )}
              </tr>
              <tr>
                <td>Birthday:</td>
                {isEdit ? (
                  <td>
                    <input
                      className="ml-[72px] focus:outline-none focus:ring-0"
                      type="date"
                      name="birth_date"
                      id="birth_date"
                      onChange={(e) => setUpdateBirthDate(e.target.value)}
                    />
                  </td>
                ) : (
                  <td className="pl-[72px]">{`Change: Value`}</td>
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-60 flex gap-2">
        <button
          onClick={() => setIsEdit(!isEdit)}
          className="border border-purple-700 rounded-full px-[40px] py-4 hover:bg-pm-hover hover:text-white cursor-pointer"
        >
          {isEdit ? "Close" : "Edit"}
        </button>
        <form onSubmit={handleSaveInformation}>
          <button
            type="submit"
            className="border border-purple-700 rounded-full px-[40px] py-4 hover:bg-pm-hover hover:text-white cursor-pointer"
          >
            Save Information
          </button>
        </form>
      </div>
    </section>
  );
}
