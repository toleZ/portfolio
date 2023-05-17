import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiLinkedin, FiGithub, FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

const MobileNavbar = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleHide = () => setIsHidden(!isHidden);

  return (
    <>
      <nav className="flex md:hidden z-20 w-screen fixed justify-end py-6 pr-6 text-white">
        <button onClick={handleHide}>
          {isHidden ? <FiMenu /> : <IoMdClose />}
        </button>
      </nav>

      <div
        className={`h-screen fixed ${
          isHidden ? "w-0 opacity-0" : "w-screen"
        } z-10 p-10 flex flex-col justify-between bg-zinc-950 transition-all duration-300`}
      >
        <ul className="mt-10 flex flex-col gap-6 items-center text-white font-lora font-medium">
          <li className="relative hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out hover:after:w-full after:absolute after:bottom-0 after:left-0 after:content-[''] after:w-0 after:h-[0.1rem] after:bg-current hover:cursor-pointer">
            <Link
              activeClass={"text-light-navy"}
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={handleHide}
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
              onClick={handleHide}
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
              onClick={handleHide}
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
              onClick={handleHide}
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
      </div>
    </>
  );
};

export default MobileNavbar;
