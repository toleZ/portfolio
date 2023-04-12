import { useEffect, useState } from "react";

export const useScroll = () => {
  const { scrollX, scrollY } = window;
  const [scrollPos, setScrollPos] = useState({
    scrollX,
    scrollY,
  });

  useEffect(() => {
    function handleScroll() {
      setScrollPos({ scrollX, scrollY });
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return scrollPos;
};
