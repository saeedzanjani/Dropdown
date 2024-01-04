import DropDownItem from "../dropDownItem";
import { DropDownMenuItemType } from "../../../../DTOs/dropDown.model";
import styles from "./DropDownBody.module.scss";

interface IDropDownBodyProps {
  list?: DropDownMenuItemType[];
  selectedItem: DropDownMenuItemType | undefined;
  up: boolean;
  setUp: Function;
  handleSelect: Function;
}

const DropDownBody = ({
  list,
  selectedItem,
  handleSelect,
}: IDropDownBodyProps) => {
  return (
    <ul className={styles.body}>
      {list?.length &&
        list?.map((menuItem: DropDownMenuItemType) => (
          <DropDownItem
            key={menuItem?.id}
            item={menuItem}
            selectedItem={selectedItem}
            handleSelect={handleSelect}
          />
        ))}
    </ul>
  );
};

export default DropDownBody;
