import { FaWhatsapp } from "react-icons/fa";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav
      className={`hidden z-10 w-full fixed md:flex justify-around items-center py-6 text-white `}
    >
      <span className="text-2xl font-montserrat">Juan C. Toloy</span>

      <ul className="flex gap-6 justify-evenly font-lora font-medium">
        <li className="relative hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out hover:after:w-full after:absolute after:bottom-0 after:left-0 after:content-[''] after:w-0 after:h-[0.1rem] after:bg-current hover:cursor-pointer">
          <Link
            activeClass={"text-light-navy"}
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="relative hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out hover:after:w-full after:absolute after:bottom-0 after:left-0 after:content-[''] after:w-0 after:h-[0.1rem] after:bg-current hover:cursor-pointer">
          <Link
            activeClass={"text-light-navy"}
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="relative hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out hover:after:w-full after:absolute after:bottom-0 after:left-0 after:content-[''] after:w-0 after:h-[0.1rem] after:bg-current hover:cursor-pointer">
          <Link
            activeClass={"text-light-navy"}
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="relative hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out hover:after:w-full after:absolute after:bottom-0 after:left-0 after:content-[''] after:w-0 after:h-[0.1rem] after:bg-current hover:cursor-pointer">
          <Link
            activeClass={"text-light-navy"}
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      <ul className="flex gap-3 justify-evenly">
        <li className="hover:scale-125 transition-all duration-300">
          <a
            href="https://www.linkedin.com/in/juan-cruz-toloy-85610223b/"
            target="_blank"
            className="text-lg text-brand-linkedin "
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
    </nav>
  );
};

export default NavBar;
