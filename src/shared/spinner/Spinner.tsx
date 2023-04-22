// Packages
import { useTheme } from "react-jss";
import { Classes } from "jss";

// Files
import { useStyles } from "./styles";
import { ITheme } from "../../DTOs/interfaces/theme.model";

const Spinner = () => {
  // Hooks
  const theme: ITheme = useTheme();
  const classes: Classes = useStyles({ theme });
  return <span className={classes.loader}></span>;
};

export default Spinner;
