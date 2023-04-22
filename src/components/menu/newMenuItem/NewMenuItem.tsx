// Packages
import React, { useState } from "react";
import { useTheme } from "react-jss";
import { Classes } from "jss";

// Components
import Button from "../../../shared/button/Button";
import TextInput from "../../../shared/input/TextInput";
import Tea from "../../../assets/icons/Tea";

// Files
import { useStyles } from "./styles";
import { ITheme } from "../../../DTOs/interfaces/theme.model";

const NewMenuItem = ({ data, setAddItem }: any) => {
  // Hooks
  const theme: ITheme = useTheme();
  const classes: Classes = useStyles({ theme });

  // States
  const [newItem, setNewItem] = useState<string>("");

  // Methods
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem(e.target.value);
  };

  const addItemHandle = () => {
    if (newItem?.trim().length > 2) {
      const item: any = {
        id: Math.floor(Math.random() * 1000),
        label: newItem,
        icon: Tea,
      };
      data.push(item);
      setNewItem("");
      setAddItem(false);
    }
  };

  return (
    <div className={classes.root}>
      <TextInput
        width="80%"
        value={newItem}
        onChange={handleChange}
        placeholder="Add new item..."
      />
      <Button
        text="Add"
        background={theme.palette.colors.blue}
        color={theme.palette.colors.light}
        width="100px"
        handleClick={addItemHandle}
      />
    </div>
  );
};

export default NewMenuItem;
