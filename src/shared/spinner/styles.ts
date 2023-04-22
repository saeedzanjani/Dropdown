// Packages
import { createUseStyles } from "react-jss";

// Styles Start
export const useStyles = createUseStyles(() => ({
  loader: {
    width: "48px",
    height: "48px",
    border: "5px solid #000",
    borderBottomColor: "transparent",
    borderRadius: "50%",
    display: "inline-block",
    boxSizing: "border-box",
    animation: "$rotation 1s linear infinite",
  },
  "@keyframes rotation": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
}));
// Styles End
