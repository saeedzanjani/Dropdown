// Packages
import { createUseStyles } from "react-jss";
import { ITheme } from "../../DTOs/interfaces/theme.model";

// Styles Start
export const useStyles = createUseStyles((theme: ITheme) => ({
  root: {
    width: theme.width.full,
    height: "auto",
    margin: "20vh auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
// Styles End
