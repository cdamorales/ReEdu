import * as React from "react";
import { SvgProps } from "../../types";
const SVGComponent = (props: SvgProps) => (
  <svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.5078 4.21484H2.50781V20.2148H22.5078V4.21484ZM20.5078 8.21484L12.5078 13.2148L4.50781 8.21484V6.21484L12.5078 11.2148L20.5078 6.21484V8.21484Z"
      fill="#FFDFCC"
    />
  </svg>
);
export default SVGComponent;