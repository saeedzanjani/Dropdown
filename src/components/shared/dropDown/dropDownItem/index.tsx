import { ComponentType, FC, memo } from "react";
import { Tick } from "../../../../assets/icons/Tick";
import { DropDownMenuItemType } from "../../../../DTOs/dropDown.model";
import styles from "./DropDownItem.module.scss";

type DropDownItemProps = {
  item: DropDownMenuItemType;
  selectedItem?: DropDownMenuItemType | undefined;
  handleSelect: Function;
};

const DropDownItem: FC<DropDownItemProps> = ({
  item,
  selectedItem,
  handleSelect,
}) => {
  const Icon: ComponentType<{}> | null = item.icon as ComponentType<{}> | null;

  return (
    <li
      className={`${styles.dropItem} ${
        selectedItem?.id === item?.id && styles.selected
      }`}
      onClick={handleSelect(item?.id)}
    >
      <div className={styles.dropItemInfo}>
        <span
          className={`${styles.dropItemText} ${
            selectedItem?.id === item?.id && styles.selected
          }`}
        >
          {item?.label}
        </span>
        {Icon && <Icon />}
      </div>
      {selectedItem?.id === item?.id && <Tick />}
    </li>
  );
};

export default memo(DropDownItem);
