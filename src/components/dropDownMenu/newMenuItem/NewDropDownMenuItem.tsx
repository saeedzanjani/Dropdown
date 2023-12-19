import React, { useCallback, FC } from "react";
import Button from "../../shared/button/Button";
import { Tea } from "../../../assets/icons/Tea";
import InputField from "../../shared/inputField/InputField";
import styles from "./NewMenuItem.module.scss";
import { DropDownMenuItemType } from "../../../DTOs/dropDown.model";
import useInput from "../../../hooks/useInput";

type NewMenuItemProps = {
  dropDownList: DropDownMenuItemType[];
  addNewItemHandler: (addItem: boolean) => void;
};

const NewDropDownMenuItem: FC<NewMenuItemProps> = ({
  dropDownList,
  addNewItemHandler,
}) => {
  const { values, setValues, handleChange } = useInput({
    setNewItem: "",
  });

  const addItemHandle = useCallback(() => {
    const { newItem } = values;

    if (newItem && newItem.trim().length > 2) {
      const item: DropDownMenuItemType = {
        id: Math.floor(Math.random() * 1000),
        label: newItem,
        icon: Tea,
      };
      setValues({ newItem: "" });
      addNewItemHandler(false);
      dropDownList.push(item);
    } else return
  }, [dropDownList, values, setValues, addNewItemHandler]);

  return (
    <div className={styles.root}>
      <InputField
        value={values.newItem}
        onChange={handleChange}
        name="newItem"
        placeholder="Add new item..."
      />
      <Button text="Add" onClick={addItemHandle} />
    </div>
  );
};

export default React.memo(NewDropDownMenuItem);
