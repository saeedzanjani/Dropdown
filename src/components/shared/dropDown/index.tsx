import { memo, FC, useMemo } from "react";
import DropDownHeader from "./dropDownHeader";
import styles from "./DropDown.module.scss";
import { DropDownMenuItemType } from "../../../DTOs/dropDown.model";
import { ArrowDown, ArrowUp } from "../../../assets/icons";
import DropDownBody from "./dropDownBody";

export type DropDownProps = {
  dropDownList?: DropDownMenuItemType[];
  up: boolean;
  setUp: Function;
  selectedItem: DropDownMenuItemType | undefined;
  handleSelect: Function;
};

const DropDown: FC<DropDownProps> = ({
  dropDownList,
  up,
  setUp,
  selectedItem,
  handleSelect,
}) => {
  const menuIcon = useMemo(() => {
    return !up ? <ArrowDown /> : <ArrowUp />;
  }, [up]);

  const toggleIcon = () => {
    setUp((prevValue: boolean) => !prevValue);
  };

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
          handleSelect={handleSelect}
        />
      )}
    </div>
  );
};

export default memo(DropDown);
