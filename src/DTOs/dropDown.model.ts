import { ComponentType, ReactElement, ReactNode } from "react";

export type DropDownMenuItemType = {
  id: number;
  label: string;
  icon: ComponentType | ReactNode;
}
