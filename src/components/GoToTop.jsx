import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function GoToTop() {
  const path = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  return null;
}

export default GoToTop;
