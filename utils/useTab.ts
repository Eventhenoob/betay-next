import { useEffect, useState } from "react";

export default function useTab() {
  const [isTab, setIsTab] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      console.log(window.innerWidth <= 978);
      setIsTab(window.innerWidth <= 978);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isTab;
}
