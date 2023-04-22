// Packages
import { useTheme } from "react-jss";
import { Classes } from "jss";

// Files
import { useStyles } from "./styles";
import Tick from "../../assets/icons/Tick";
import { ITheme } from "../../DTOs/interfaces/theme.model";
import { IIDopDown } from "../../DTOs/interfaces/dropDown.model";

// Models
interface IDropDownItemProps {
  item?: IIDopDown | any;
  list?: IIDopDown[];
  selectedItem?: IIDopDown | undefined;
  setSelectedItem: Function;
  setUp: Function;
}

const DropDownItem = ({
  item,
  list,
  selectedItem,
  setSelectedItem,
  setUp,
}: IDropDownItemProps) => {
  // Hooks
  const theme: ITheme = useTheme();
  const classes: Classes = useStyles({ theme });

  // Methods
  const handleSelect = (id: number) => {
    const selected = list?.find((item: IIDopDown) => +item?.id === +id);
    setSelectedItem(null);
    setSelectedItem(selected);
    setUp(false);
  };

  return (
    <li
      className={`${classes.dropItem} ${
        selectedItem?.id === item?.id && classes.selected
      }`}
      onClick={() => handleSelect(Number(item?.id))}
    >
      <div className={classes.dropItem_info}>
        <span className={classes.dropItem_text}>{item?.label}</span>
        <item.icon />
      </div>
      {selectedItem?.id === item?.id && <Tick />}
    </li>
  );
};

export default DropDownItem;
