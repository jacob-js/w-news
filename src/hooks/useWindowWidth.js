import { useEffect, useState } from "react";

export default function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState();
    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowWidth;
  }