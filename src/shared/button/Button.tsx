// Packages
import { forwardRef } from "react";
import { useTheme } from "react-jss";
import { Classes } from "jss";

// Components
import { IButton } from "../../DTOs/interfaces/button.model";

// Files
import { useStyles } from "./styles";
import { ITheme } from "../../DTOs/interfaces/theme.model";


const Button = forwardRef(({
  text,
  width = "70px",
  height = "40px",
  background = "#ffffff",
  color = "#000",
  font = "16px",
  space = "10px 20px",
  handleClick,
  styles
}: IButton, ref: HTMLButtonElement | any) => {
  // Hooks
  const theme: ITheme = useTheme();
  const classes: Classes = useStyles({ theme });

  return (
    <button
      ref={ref}
      className={classes.button}
      style={{
        backgroundColor: background,
        color,
        fontSize: font,
        padding: space,
        width,
        height,
        ...styles
      }}
      onClick={handleClick}

    >
      {text}
    </button>
  );
})

export default Button;
