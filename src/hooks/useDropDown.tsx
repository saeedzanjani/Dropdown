import { useState, useCallback } from "react";
import { DropDownMenuItemType } from "../DTOs/dropDown.model";
import useEventListener from "./useEventListener";

const useDropDown = (list: DropDownMenuItemType[]) => {
  const [up, setUp] = useState(false);
  const [dropList, setDropList] = useState<DropDownMenuItemType[]>(list);
  const [selectedItem, setSelectedItem] = useState<
    DropDownMenuItemType | undefined
  >(list?.[1]);

  useEventListener(
    "click",
    () => {
      if (up) {
        setUp(false);
      }
    },
    window,
    false
  );

  const handleSelect = useCallback(
    (id: number) => () => {
      const selected = dropList?.find(
        (item: DropDownMenuItemType) => +item?.id === +id
      );
      setSelectedItem(selected);
      setUp(false);
    },
    [dropList, setSelectedItem, setUp]
  );

  return { up, setUp, dropList, setDropList, selectedItem, handleSelect };
};

export default useDropDown;
