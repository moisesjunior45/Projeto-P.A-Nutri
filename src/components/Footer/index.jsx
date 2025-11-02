import logo2 from "../../assets/images/logos/logo2.png";

// icons
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600 dark:text-teal-300">
          <img src={logo2} alt="Logo" className="w-[300px] h-auto" />
        </div>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              href="#Home"
            >
              Home
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              href="#testimonials"
            >
              Depoimentos
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              href="#specialties"
            >
              Minhas Especialidades
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              href="#ebooks"
            >
              Ebooks
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              href="#faq"
            >
              FAQ
            </a>
          </li>
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="https://api.whatsapp.com/send/?phone=558189147221&text&type=phone_number&app_absent=0"
              target="_blank"
              className="flex items-center justify-center w-12 h-12 
                 text-green-600 hover:text-green-400 transition"
            >
              <FaWhatsapp className="w-8 h-8" />
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/priscilaaraujonutricionista/"
              target="_blank"
              className="flex items-center justify-center w-12 h-12 
                 text-pink-600 hover:text-pink-400 transition"
            >
              <CiInstagram className="w-8 h-8" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
