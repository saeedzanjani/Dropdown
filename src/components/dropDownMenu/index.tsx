import { FC, useState } from "react";
import NewDropDownMenuItem from "./newMenuItem/NewDropDownMenuItem";
import DropDown from "../shared/dropDown";
import useEventListener from "../../hooks/useEventListener";
import { DropDownMenuItemType } from "../../DTOs/dropDown.model";
import useDropDown from "../../hooks/useDropDown";

type DropDownMenuProps = {
  DropDownList: DropDownMenuItemType[];
};

const DropDownMenu: FC<DropDownMenuProps> = ({ DropDownList }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { up, setUp, dropList, handleSelect, selectedItem } =
    useDropDown(DropDownList);

  useEventListener(
    "keyup",
    (e: Event) => {
      const keyboardEvent = e as KeyboardEvent;
      if (keyboardEvent.key === "Enter") {
        setIsOpen((prevValue) => !prevValue);
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
    },
    window,
    false
  );

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div onClick={handleClick}>
      {!isOpen ? (
        <DropDown
          dropDownList={dropList}
          up={up}
          setUp={setUp}
          handleSelect={handleSelect}
          selectedItem={selectedItem}
        />
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
