// Packages
import { useTheme } from "react-jss";
import { Classes } from "jss";

// Components
import DropDownItem from "./DropDownItem";

// Files
import { useStyles } from "./styles";
import { IIDopDown } from "../../DTOs/interfaces/dropDown.model";
import { ITheme } from "../../DTOs/interfaces/theme.model";

// Models
interface IDropDownBodyProps {
  list?: IIDopDown[];
  selectedItem: IIDopDown | undefined;
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
  // Hooks
  const theme: ITheme = useTheme();
  const classes: Classes = useStyles({ theme });

  return (
    <ul className={classes.body}>
      {/* DropDown Item */}
      {list && list?.map((l: IIDopDown) => (
        <DropDownItem
          key={l?.id}
          item={l}
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
