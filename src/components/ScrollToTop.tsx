import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" }); // or "smooth" if you want a nice effect
  }, [pathname]);

  return null;
};
