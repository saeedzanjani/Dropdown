// Packages
import { createUseStyles } from "react-jss";

// Files
import { ITheme } from "../../DTOs/interfaces/theme.model";

// Styles Start
export const useStyles = createUseStyles((theme: ITheme) => ({
  root: {
    boxShadow: theme.shadow.center.mid,
    borderRadius: theme.radius.max,
    border: "none",
    padding: "0 20px",
  },
}));
// Styles End
