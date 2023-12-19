import { useEffect, useState } from "react";
import NewDropDownMenuItem from "./newMenuItem/NewDropDownMenuItem";
import DropDown from "../shared/dropDown";
import useEventListener from "../../hooks/useEventListener";

import { DropDownMenuItemType } from "../../DTOs/dropDown.model";
import { DROPDOWN_ITEMS } from "../../utils/mockData";

const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropList, setDropList] = useState<DropDownMenuItemType[]>([]);
  const [up, setUp] = useState<boolean>(false);

  useEventListener(
    "keyup",
    (e: Event) => {
      const keyboardEvent = e as KeyboardEvent;
      if (keyboardEvent.key === "Enter") {
        setIsOpen(!isOpen);
      }
    },
    window
  );

  useEventListener(
    "click",
    () => {
      if (isOpen) {
        setIsOpen(false);
      }
      if (up) {
        setUp(false);
      }
    },
    window,
    false
  );

  useEffect(() => {
    setDropList(DROPDOWN_ITEMS);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div onClick={handleClick}>
      {!isOpen ? (
        <DropDown dropDownList={dropList} up={up} setUp={setUp} />
      ) : (
        <NewDropDownMenuItem
          dropDownList={dropList}
          addNewItemHandler={setIsOpen}
        />
      )}
    </div>
  );
};

export default DropDownMenu;
