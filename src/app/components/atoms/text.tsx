import React from "react";
import { TitleTextProps } from "../types";

const Text: React.FC<TitleTextProps> = ({
  label,
  color,
  fontWeight,
  size,
  style,
  className,
}) => {
  return (
    <span
      style={{
        color,
        fontWeight,
        fontSize: size,
        ...style,
      }}
      className={className}
    >
      {label}
    </span>
  );
};
export default Text;
