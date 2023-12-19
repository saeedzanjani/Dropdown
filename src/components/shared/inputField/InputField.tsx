import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./InputField.module.scss";

export enum InputTypes {
  TEXT = "text",
  NUMBER = "number",
  EMAIL = "email",
  DATE = "date",
  SUBMIT = "submit",
  FILE = "file",
}

export type InputProps = {
  value?: string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
};

type InputFieldProps = InputProps & InputHTMLAttributes<HTMLInputElement>;

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { value, onChange, type = InputTypes.TEXT, placeholder, ...otherProps },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.root}
        {...otherProps}
      />
    );
  }
);

export default InputField;
