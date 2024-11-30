import * as React from "react";
import { SvgProps } from "../../types";
const SVGComponent = (props: SvgProps) => (
  <svg
    width={41}
    height={41}
    viewBox="0 0 41 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.5078 35.2148C28.7921 35.2148 35.5078 28.4991 35.5078 20.2148C35.5078 11.9306 28.7921 5.21484 20.5078 5.21484C12.2235 5.21484 5.50781 11.9306 5.50781 20.2148C5.50781 28.4991 12.2235 35.2148 20.5078 35.2148Z"
      stroke="white"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.7578 13.9649H24.2578C23.7648 13.9628 23.2762 14.0584 22.8203 14.2461C22.3644 14.4338 21.9502 14.71 21.6016 15.0586C21.253 15.4072 20.9768 15.8215 20.7891 16.2774C20.6014 16.7333 20.5058 17.2218 20.5078 17.7149V35.2149"
      stroke="white"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.5078 22.7148H25.5078"
      stroke="white"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SVGComponent;
