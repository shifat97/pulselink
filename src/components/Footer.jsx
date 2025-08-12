import { logo } from "../constants/images";
import { companyLinks, getInTouch } from "../constants/footerLinks";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="mt-200">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
        <div>
          <img
            className="block mx-auto lg:mx-0"
            src={logo}
            alt="Company Logo"
          />
          <p className="text-md lg:text-18 text-center lg:text-left text-gray1 mt-40 lg:w-[646px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h1 className="text-20 lg:text-22 text-gray1 uppercase font-semibold text-center md:text-left">
            Company
          </h1>
          <ul className="mt-18 lg:mt-40 flex flex-col items-center lg:items-start gap-2">
            {companyLinks.map((item, index) => (
              <Link key={index} to={item.to}>
                <li className="text-md lg:text-18 text-gray1">{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-20 lg:text-22 text-gray1 uppercase font-semibold text-center md:text-left">
            GET IN TOUCH
          </h1>
          <ul className="mt-18 lg:mt-40 flex flex-col items-center lg:items-start gap-2">
            {Object.entries(getInTouch).map(([key, value]) => (
              <div key={key}>
                <li className="text-md lg:text-18 text-gray1">{value}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t-1 border-black/20 mt-60">
        <p className="text-md lg:text-18 text-gray1 pt-18 pb-2 text-center">
          Copyright © 2024 Md. Shifat Bin Reza - All Right Reserved.
        </p>
      </div>
    </footer>
  );
}
