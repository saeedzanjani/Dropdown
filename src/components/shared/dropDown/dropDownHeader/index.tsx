import { MouseEventHandler, ReactElement, FC, memo } from "react";
import { DropDownMenuItemType } from "../../../../DTOs/dropDown.model";
import styles from "./DropDownHeader.module.scss";

type DropDownMenuHeaderProps = {
  icon?: ReactElement;
  toggleIcon: MouseEventHandler;
  selected: DropDownMenuItemType | undefined;
};

const DropDownHeader: FC<DropDownMenuHeaderProps> = ({
  icon,
  selected,
  toggleIcon,
}) => {
  return (
    <div className={styles.header} onClick={toggleIcon}>
      <span className={styles.headerTitle}>{selected?.label}</span>
      {icon}
    </div>
  );
};

export default memo(DropDownHeader);
