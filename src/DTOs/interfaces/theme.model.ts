// Theme
export interface ITheme {
  palette: IPalette;
  radius: IRadius;
  shadow: IShadow;
  fontSize: IFontSize;
  width: IWidth;
}

// Colors
export interface IColors {
  dark: string;
  light: string;
  gray: string;
  blue: string;
  light_blue: string;
}

export interface IPalette {
  colors: IColors;
}

// Width
export interface IWidth {
  full: string;
}

// FontSize
export interface IMedium {
  min: string;
  mid: string;
  max: string;
}

export interface IFontSize {
  medium: IMedium;
}

// Shadow
export interface ICenter {
  min: string;
  mid: string;
}

export interface IShadow {
  center: ICenter;
}

// Radius
export interface IRadius {
  min: string;
  mid: string;
  max: string;
}
