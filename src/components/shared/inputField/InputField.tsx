import {
  forwardRef,
  InputHTMLAttributes,
  useImperativeHandle,
  useRef,
} from "react";
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
export type InputMethods = {
  focus: () => void;
};

type InputFieldProps = InputProps & InputHTMLAttributes<HTMLInputElement>;

const InputField = forwardRef<InputMethods, InputFieldProps>(
  (
    { value, onChange, type = InputTypes.TEXT, placeholder, ...otherProps },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
    }));

    return (
      <input
        ref={inputRef}
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
