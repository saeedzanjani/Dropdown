import { ReactNode, FC } from "react";
import styles from "./MainLayout.module.scss";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default MainLayout;
