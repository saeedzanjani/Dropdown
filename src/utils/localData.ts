// Icons
import {
  Art,
  Football,
  Graduate,
  Health,
  Science,
  VideoGame,
} from "../assets/icons";

// Files
import { IIDopDown } from "../DTOs/interfaces/dropDown.model";

// HardCode Data
export const DROPDOWN_ITEMS: IIDopDown[] = [
  { id: 1, label: "Education", icon: Graduate },
  { id: 2, label: "Yeeeah, science!", icon: Science },
  { id: 3, label: "Art", icon: Art },
  { id: 4, label: "Sport", icon: Football },
  { id: 5, label: "Games", icon: VideoGame },
  { id: 6, label: "Health", icon: Health },
];
