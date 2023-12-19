import { useEffect, useState, memo, FC, useMemo } from "react";
import DropDownHeader from "./dropDownHeader";
import styles from "./DropDown.module.scss";
import { DropDownMenuItemType } from "../../../DTOs/dropDown.model";
import { ArrowDown, ArrowUp } from "../../../assets/icons";
import DropDownBody from "./dropDownBody";

export type DropDownProps = {
  dropDownList?: DropDownMenuItemType[];
  up: boolean;
  setUp: Function
};

const DropDown: FC<DropDownProps> = ({ dropDownList, up, setUp }) => {
  const [selectedItem, setSelectedItem] = useState<
    DropDownMenuItemType | undefined
  >();


  const menuIcon = useMemo(() => {
    return !up ? <ArrowDown /> : <ArrowUp />
  }, [up])

  const toggleIcon = () => {
    setUp(!up);
  };

  useEffect(() => {
    setSelectedItem(dropDownList?.[1]);
  }, [dropDownList, setSelectedItem]);

  return (
    <div className={styles.root}>
      {/* DropDown Header */}
      <DropDownHeader
        icon={menuIcon}
        toggleIcon={toggleIcon}
        selected={selectedItem}
      />

      {/* DropDown Body */}
      {up && (
        <DropDownBody
          list={dropDownList}
          selectedItem={selectedItem}
          up={up}
          setUp={setUp}
          setSelectedItem={setSelectedItem}
        />
      )}
    </div>
  );
};

export default memo(DropDown);
