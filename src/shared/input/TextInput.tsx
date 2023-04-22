// Packages
import { forwardRef } from "react";
import { useTheme } from "react-jss";
import { Classes } from "jss";

// Files
import { useStyles } from "./styles";
import { IInput } from "../../DTOs/interfaces/input.model";
import { ITheme } from "../../DTOs/interfaces/theme.model";

const TextInput = forwardRef(
  (
    {
      value,
      onChange,
      width = "100%",
      height = "40px",
      placeholder,
      styles,
    }: IInput,
    ref: HTMLInputElement | any
  ) => {
    // Hooks
    const theme: ITheme = useTheme();
    const classes: Classes = useStyles({ theme });
    return (
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={classes.root}
        style={{
          width,
          height,
          ...styles,
        }}
      />
    );
  }
);

export default TextInput;
