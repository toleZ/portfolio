import { FiLinkedin, FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 bg-cover bg-zinc-950 bg-dark-950 text-white flex flex-col gap-4 md:flex-row justify-around items-center">
      <div>
        <span className="font-montserrat">Juan C. Toloy | </span>
        <span className="font-lora text-light-navy">Full Stack Developer</span>
      </div>

      <ul className="flex gap-3 justify-evenly">
        <li className="hover:scale-125 transition-all duration-300">
          <a
            href="https://www.linkedin.com/in/juan-cruz-toloy-85610223b/"
            target="_blank"
            className="text-lg text-brand-linkedin"
          >
            <FiLinkedin />
          </a>
        </li>
        <li className="hover:scale-125 transition-all duration-300">
          <a
            href="https://github.com/tolez"
            target="_blank"
            className="text-lg text-brand-git"
          >
            <FiGithub />
          </a>
        </li>
        <li className="hover:scale-125 transition-all duration-300">
          <a
            href="https://wa.link/72q4il"
            target="_blank"
            className="text-lg text-brand-whatsapp"
          >
            <FaWhatsapp />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
