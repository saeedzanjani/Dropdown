// Packages
import { createUseStyles } from "react-jss";

// Files
import { ITheme } from "../../DTOs/interfaces/theme.model";

// Styles Start
export const useStyles = createUseStyles((theme: ITheme) => ({
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.colors.blue,
    color: theme.palette.colors.light,
    display: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    padding: "20vh",
    textAlign: "center",
    fontSize: "3rem",
  },
}));
// Styles End
