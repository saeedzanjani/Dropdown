// Packages
import { useEffect, useState } from "react";

// Components
import ArrowUp from "../assets/icons/ArrowUp";
import ArrowDown from "../assets/icons/ArrowDown";

const useDropDown = () => {
  // States
  const [icon, setIcon] = useState<React.ReactElement>(<ArrowUp />);
  const [up, setUp] = useState<boolean>(false);

  // Lifecycles
  useEffect(() => {
    if (!up) {
      setIcon(<ArrowDown />);
    } else {
      setIcon(<ArrowUp />);
    }
  }, [up, setUp]);

  // Methods
  const toggleIcon = () => {
    setUp(!up);
  };

  return {
    toggleIcon,
    icon,
    up,
    setUp,
  };
};

export default useDropDown;
