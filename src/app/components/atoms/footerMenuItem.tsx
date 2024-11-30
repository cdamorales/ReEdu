import React from "react";
import { FooterMenuItemProps } from "../types";

const FooterMenuItem: React.FC<FooterMenuItemProps> = ({
  label,
  color,
  fontWeight,
  fontSize,
}) => {
  return (
    <span
      style={{
        color,
        fontWeight,
        fontSize,
      }}
    >
      {label}
    </span>
  );
};
export default FooterMenuItem;
