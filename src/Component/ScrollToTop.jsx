import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll (smooth nahi chahiye toh "instant" rakho)
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // Agar smooth chahiye toh: behavior: "smooth"
  }, [pathname]);

  return null; // Yeh component kuch render nahi karta
}