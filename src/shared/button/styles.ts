// Packages
import { createUseStyles } from "react-jss";

// Files
import { ITheme } from "../../DTOs/interfaces/theme.model";

// Styles Start
export const useStyles = createUseStyles((theme: ITheme) => ({
  button: {
    boxShadow: theme.shadow.center.min,
    borderRadius: theme.radius.max,
    border: "none",
    margin: "10px",
    cursor: "pointer",
  },
}));
// Styles End
