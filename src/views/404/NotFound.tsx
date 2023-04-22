// Packages
import { FC, ReactElement } from "react";
import { useTheme } from "react-jss";
import { Classes } from "jss";

// Files
import { useStyles } from "./styles";
import { ITheme } from "../../DTOs/interfaces/theme.model";

const NotFound: FC = (): ReactElement => {
  // Hooks
  const theme: ITheme = useTheme();
  const classes: Classes = useStyles({ theme });
  return (
    <div className={classes.root}>
      <p className={classes.text}>Page Not Found!</p>
    </div>
  );
};

export default NotFound;
