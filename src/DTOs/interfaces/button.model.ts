import React from "react";

export interface IButton {
  text?: string;
  width?: string;
  height?: string;
  background?: string;
  color?: string;
  font?: string;
  space?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  styles?: React.CSSProperties;
}
