import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-scroll";
import { useScroll } from "../hooks/useScroll";

const ToTopButton = () => {
  const { scrollY } = useScroll();

  return (
    <Link
      className={`fixed bottom-0 right-0 m-4 p-2 border-2 rounded-full bg-light-navy border-light-navy text-white hover:bg-transparent hover:text-light-navy hover:cursor-pointer transition-all duration-300 ${
        scrollY < 50 ? "translate-x-[1000px]" : "translate-x-0"
      }`}
      to="home"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      <MdKeyboardArrowUp />
    </Link>
  );
};

export default ToTopButton;
