import { ComponentType, FC, ReactElement, ReactNode, memo, useCallback } from "react";
import { Tick } from "../../../../assets/icons/Tick";
import { DropDownMenuItemType } from "../../../../DTOs/dropDown.model";
import styles from "./DropDownItem.module.scss";

type DropDownItemProps = {
  item: DropDownMenuItemType;
  list?: DropDownMenuItemType[];
  selectedItem?: DropDownMenuItemType | undefined;
  setSelectedItem: Function;
  setUp: Function;
};

const DropDownItem: FC<DropDownItemProps> = ({
  item,
  list,
  selectedItem,
  setSelectedItem,
  setUp,
}) => {
  const Icon: ComponentType<{}> | null = item.icon as ComponentType<{}> | null;
  const handleSelect = useCallback(
    (id: number) => () => {
      const selected = list?.find(
        (item: DropDownMenuItemType) => +item?.id === +id
      );
      setSelectedItem(null);
      setSelectedItem(selected);
      setUp(false);
    },
    [list, setSelectedItem, setUp]
  );

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
