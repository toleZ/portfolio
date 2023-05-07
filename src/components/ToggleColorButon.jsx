import { FiMoon, FiSun } from "react-icons/fi";

const ToggleColorButton = ({ colorMode = "dark", handleClick = () => {} }) => {
  return (
    <button
      className="fixed bottom-0 right-0 m-4 p-2 border-2 rounded-full bg-light-navy border-light-navy text-white hover:bg-transparent hover:text-light-navy hover:cursor-pointer transition-all duration-300"
      onClick={handleClick}
    >
      {colorMode !== "light" ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default ToggleColorButton;
