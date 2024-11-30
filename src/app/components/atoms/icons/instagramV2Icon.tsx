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
      d="M20.5078 25.5273C23.4418 25.5273 25.8203 23.1489 25.8203 20.2148C25.8203 17.2808 23.4418 14.9023 20.5078 14.9023C17.5738 14.9023 15.1953 17.2808 15.1953 20.2148C15.1953 23.1489 17.5738 25.5273 20.5078 25.5273Z"
      stroke="white"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28.0078 5.21484H13.0078C8.86568 5.21484 5.50781 8.57271 5.50781 12.7148V27.7148C5.50781 31.857 8.86568 35.2148 13.0078 35.2148H28.0078C32.1499 35.2148 35.5078 31.857 35.5078 27.7148V12.7148C35.5078 8.57271 32.1499 5.21484 28.0078 5.21484Z"
      stroke="white"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28.6328 14.5898C30.0135 14.5898 31.1328 13.4706 31.1328 12.0898C31.1328 10.7091 30.0135 9.58984 28.6328 9.58984C27.2521 9.58984 26.1328 10.7091 26.1328 12.0898C26.1328 13.4706 27.2521 14.5898 28.6328 14.5898Z"
      fill="white"
    />
  </svg>
);
export default SVGComponent;
