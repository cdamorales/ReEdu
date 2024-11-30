import React from "react";
import { MenuItemProps } from "../types";

const MenuItem: React.FC<MenuItemProps> = ({ label, isActive }) => {
  return (
    <span
      style={{
        color: isActive ? "#BD142D" : "#0E0E0E",
        fontWeight: isActive ? "bold" : "normal",
      }}
    >
      {label}
    </span>
  );
};
export default MenuItem;
