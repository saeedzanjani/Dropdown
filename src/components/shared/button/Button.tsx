// Packages
import { FC } from "react";
import styles from "./Button.module.scss";

export enum ButtonTypes {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset",
}

export type ButtonProps = {
  text?: string;
  type?: ButtonTypes | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<ButtonProps> = ({
  text,
  type = ButtonTypes.BUTTON,
  onClick,
  ...otherProps
}) => {
  return (
    <button
      className={styles.root}
      type={type}
      onClick={onClick}
      {...otherProps}
    >
      {text}
    </button>
  );
};

export default Button;
