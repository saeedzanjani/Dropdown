import { useState } from "react";

type InputValuesType = {
  [key: string]: string;
};

const useInput = (initialValues: InputValuesType = {}) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name: string = event.target.name;
    const value: string = event.target.value;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return { values, setValues, handleChange };
};

export default useInput;
