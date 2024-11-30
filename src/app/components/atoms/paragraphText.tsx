import React from "react";
import { ParagraphTextProps } from "../types";

const ParagraphText = ({ children, className }: ParagraphTextProps) => {
  return <span className={className}>{children}</span>;
};
export default ParagraphText;
