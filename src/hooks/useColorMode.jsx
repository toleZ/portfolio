import { useState, useEffect } from "react";

const useColorMode = (defaultMode = "light") => {
  const [colorMode, setColorMode] = useState(defaultMode);

  useEffect(() => {
    const storedColorMode = window.localStorage.getItem("colorMode");
    if (storedColorMode) setColorMode(storedColorMode);
  }, []);

  const toggleColorMode = () => {
    const newColorMode = colorMode === "light" ? "dark" : "light";
    setColorMode(newColorMode);
    window.localStorage.setItem("colorMode", newColorMode);
    setBodyClasses(newColorMode);
  };

  const setBodyClasses = (mode) => {
    document.documentElement.classList.remove(`${colorMode}-mode`);
    document.documentElement.classList.add(`${mode}-mode`);
  };

  return [colorMode, toggleColorMode];
};

export default useColorMode;
