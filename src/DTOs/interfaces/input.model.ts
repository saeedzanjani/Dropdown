import React from "react";

export interface IInput {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  width?: string;
  height?: string;
  placeholder?: string;
  styles?: React.CSSProperties;
}
