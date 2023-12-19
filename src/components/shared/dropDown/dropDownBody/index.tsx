import DropDownItem from "../dropDownItem";
import { DropDownMenuItemType } from "../../../../DTOs/dropDown.model";
import styles from "./DropDownBody.module.scss";

interface IDropDownBodyProps {
  list?: DropDownMenuItemType[];
  selectedItem: DropDownMenuItemType | undefined;
  setSelectedItem: Function;
  up: boolean;
  setUp: Function;
}

const DropDownBody = ({
  list,
  selectedItem,
  setSelectedItem,
  setUp,
}: IDropDownBodyProps) => {
  return (
    <ul className={styles.body}>
      {list?.length &&
        list?.map((menuItem: DropDownMenuItemType) => (
          <DropDownItem
            key={menuItem?.id}
            item={menuItem}
            setUp={setUp}
            list={list}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        ))}
    </ul>
  );
};

export default DropDownBody;
