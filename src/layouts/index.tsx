import { ReactNode } from "react";
import { useStyles } from "./styles";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default Layout;
