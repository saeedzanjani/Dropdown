// Packages
import { createUseStyles } from "react-jss";

// Files
import { ITheme } from "../../DTOs/interfaces/theme.model";

// Styles Start
export const useStyles = createUseStyles((theme: ITheme) => ({
  root: {
    width: "35%",
    height: "auto",
    margin: "20vh auto",
    "@media (min-width: 960px) and (max-width: 1200px)": {
      width: "60%",
    },
    "@media screen and (max-width: 960px)": {
      width: "90%",
    },
  },

  // Header Styles
  header: {
    width: "100%",
    height: "50px",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: theme.radius.mid,
    boxShadow: theme.shadow.center.min,
    backgroundColor: theme.palette.colors.light,
    cursor: "pointer",
    userSelect: "none",
  },
  header_title: {
    fontSize: theme.fontSize.medium.max,
    fontWeight: 600,
    color: theme.palette.colors.gray,
  },
  header_icon: {
    
  },

  // Body Styles
  body: {
    width: "100%",
    height: "400px",
    maxHeight: "400px",
    padding: "10px 20px",
    margin: "15px 0",
    display: "flex",
    alignItems: "center",
    flexFlow: "column",
    justifyContent: "space-between",
    borderRadius: theme.radius.max,
    boxShadow: theme.shadow.center.min,
    backgroundColor: theme.palette.colors.light,
    overflowY: "scroll",
    overflowX: "hidden",
  },

  // Drop Item
  dropItem: {
    width: "100%",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexFlow: "row",
    margin: "10px 0",
    padding: "23px 10px",
    borderRadius: theme.radius.mid,
    transition: "0.5s all",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: theme.palette.colors.light_blue,
    },
  },
  selected: {
    backgroundColor: theme.palette.colors.light_blue,
  },
  dropItem_info: {
    display: "flex",
    alignItems: "center",
    flexFlow: "row",
    justifyContent: "center",
  },
  dropItem_text: {
    fontSize: theme.fontSize.medium.max,
    fontWeight: 600,
    color: theme.palette.colors.gray,
  },
}));
// Styles End
