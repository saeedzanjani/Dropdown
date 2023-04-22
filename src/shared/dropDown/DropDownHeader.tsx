// Packages
import { MouseEventHandler, ReactElement } from "react";
import { useTheme } from "react-jss";
import { Classes } from "jss";

// Files
import { useStyles } from "./styles";
import { ITheme } from "../../DTOs/interfaces/theme.model";
import { IIDopDown } from "../../DTOs/interfaces/dropDown.model";

// Models
interface IDropDownHeader {
  icon?: ReactElement;
  toggleIcon: MouseEventHandler;
  selected: IIDopDown | undefined;
}

const DropDownHeader = ({ icon, selected, toggleIcon }: IDropDownHeader) => {
  // Hooks
  const theme: ITheme = useTheme();
  const classes: Classes = useStyles({ theme });

  return (
    <div className={classes.header} onClick={toggleIcon}>
      <span className={classes.header_title}>{selected?.label}</span>
      {icon}
    </div>
  );
};

export default DropDownHeader;
