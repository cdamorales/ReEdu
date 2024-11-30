import React from "react";
import { TitleTextProps } from "../types";

const TitleText: React.FC<TitleTextProps> = ({
  label,
  color,
  fontWeight,
  size,
}) => {
  return (
    <span
      style={{
        color,
        fontWeight,
        fontSize: size,
      }}
    >
      {label}
    </span>
  );
};
export default TitleText;
