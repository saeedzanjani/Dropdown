import { FC } from "react";
import { IconProps } from "../../DTOs/icon.model";

export const Tick: FC<IconProps> = ({
  width = "40px",
  height = "25px",
  fill = "none",
}): JSX.Element => {
  return (
    <svg
      fill={fill}
      height={height}
      width={width}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#f50000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
          stroke="#2800f0"
          stroke-width="2.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />{" "}
      </g>
    </svg>
  );
};
