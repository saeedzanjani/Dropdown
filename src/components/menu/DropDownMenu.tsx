// Packages
import { useEffect, useState } from "react";

// Components
import NewMenuItem from "./newMenuItem/NewMenuItem";
import DropDown from "../../shared/dropDown";
import useEventListener from "../../hooks/useEventListener";

// Files
import { DROPDOWN_ITEMS } from "../../utils/localData";
import useDropDown from "../../hooks/useDropDown";
import { IIDopDown } from "../../DTOs/interfaces/dropDown.model";

const DropDownMenu = () => {
  // Hooks
  useEventListener(
    "keyup",
    (e: any) => {
      if (e.key === "Enter") {
        setAddItem(!addItem);
      }
    },
    window
  );

  // const { dropList } = useDropDown(DROPDOWN_ITEMS);

  // States
  const [addItem, setAddItem] = useState<Boolean>(false);
  const [dropList, setDropList] = useState<IIDopDown[] | undefined>([]);


  useEffect(() => {
    setDropList(DROPDOWN_ITEMS);
  }, [dropList]);


  return (
    <div>
      {!addItem ? (
        <DropDown data={dropList} />
      ) : (
        <NewMenuItem data={dropList} setAddItem={setAddItem} />
      )}
    </div>
  );
};

export default DropDownMenu;
