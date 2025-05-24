import { useState } from "react";

import logo from "../../assets/images/logos/logo1.png";

// icons
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="relative p-4 bg-white w-full h-[100px] flex items-center justify-between border-b-2 border-[#556E5B]">
        <ul className="hidden md:flex space-x-4">
          <li className="text-3xl hover:text-[#455148] hover:underline">
            <a
              href="https://www.instagram.com/priscilaaraujonutricionista/"
              target="_blank"
            >
              <CiInstagram />
            </a>
          </li>
          <li className="text-3xl hover:text-[#556E5B] hover:underline">
            <a
              href="https://api.whatsapp.com/send/?phone=558189147221&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <FaWhatsapp />
            </a>
          </li>
        </ul>

        <div className="absolute left-1/2 transform -translate-x-1/2 w-[172px]">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <div className="hidden mm:flex items-center space-x-4">
          <ul className="flex space-x-6 text-primary text-[12px] font-bold max-mm:text-[10px]">
            <li className="hover:text-[#556E5B] hover:underline">
              <a href="#">Sobre</a>
            </li>
            <li className="hover:text-[#556E5B] hover:underline">
              <a href="#">Especialidades</a>
            </li>
            <li className="hover:text-[#556E5B] hover:underline">
              <a href="#">Depoimentos</a>
            </li>
            <li className="hover:text-[#556E5B] hover:underline">
              <a href="#">Ebooks</a>
            </li>
          </ul>


          <button
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=558189147221&text&type=phone_number&app_absent=0",
                "_blank"
              )
            }
            className="hidden w-auto h-[48px] px-[10px] py-[5px] rounded-full bg-white border border-primary text-[10px] font-semibold text-primary transition hover:bg-primary hover:text-white hover:border-white focus:ring-3 focus:ring-secondary focus:outline-hidden cursor-pointer xl:inline-block whitespace-nowrap"
>
            AGENDE SUA CONSULTA
          </button>
        </div>

        <button className="mm:hidden p-2 text-gray-500" onClick={toggleMenu}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white p-4 shadow-md mn:hidden">
            <ul className="space-y-4 text-primary">
              <li className="text-lg hover:text-[#556E5B] hover:underline">
                <a href="#">Sobre</a>
              </li>
              <li className="text-lg hover:text-[#556E5B] hover:underline">
                <a href="#">Especialidades</a>
              </li>
              <li className="text-lg hover:text-[#556E5B] hover:underline">
                <a href="#">Depoimentos</a>
              </li>
              <li className="text-lg hover:text-[#556E5B] hover:underline">
                <a href="#">Ebooks</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
