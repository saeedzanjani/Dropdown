// Packages
import { useEffect, useState } from "react";
import { useTheme } from "react-jss";
import { Classes } from "jss";

// Components
import DropDownHeader from "./DropDownHeader";
import DropDownBody from "./DropDownBody";
import useDropDown from "../../hooks/useDropDown";

// Files
import { IIDopDown } from "../../DTOs/interfaces/dropDown.model";
import { useStyles } from "./styles";
import { ITheme } from "../../DTOs/interfaces/theme.model";

// Models
export interface IDropDown {
  data?: IIDopDown[];
}

const DropDown = ({ data }: IDropDown) => {
  // Hooks
  const theme: ITheme = useTheme();
  const [selectedItem, setSelectedItem] = useState<IIDopDown | undefined | any>(
    null
  );
  const { icon, up, setUp, toggleIcon } = useDropDown();

  // States
  const classes: Classes = useStyles({ theme });

  // Lifecycle
  useEffect(() => {
    setSelectedItem(data?.[1]);
  }, [data, setSelectedItem]);

  return (
    <div className={classes.root}>
      {/* DropDown Header */}
      <DropDownHeader
        icon={icon}
        toggleIcon={toggleIcon}
        selected={selectedItem}
      />

      {/* DropDown Body */}
      {up && (
        <DropDownBody
          list={data}
          selectedItem={selectedItem}
          up={up}
          setUp={setUp}
          setSelectedItem={setSelectedItem}
        />
      )}
    </div>
  );
};

export default DropDown;
