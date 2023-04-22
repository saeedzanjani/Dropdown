// Packages
import { createUseStyles } from "react-jss";

// Styles Start
export const useStyles = createUseStyles(() => ({
  root: {
    width: "35%",
    height: "auto",
    margin: "20vh auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexFlow: "row",

    "@media (min-width: 960px) and (max-width: 1200px)": {
      width: "60%",
    },
    "@media screen and (max-width: 960px)": {
      width: "90%",
    },
    "@media screen and (max-width: 460px)": {
      flexFlow: "column",
    },
  },
}));
// Styles End
