import * as React from "react";
import { SvgProps } from "../../types";
const SVGComponent = (props: SvgProps) => (
  <svg
    width={40}
    height={41}
    viewBox="0 0 40 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect y={0.964844} width={40} height={40} rx={8} fill="#BD142D" />
    <rect
      y={0.964844}
      width={40}
      height={40}
      rx={8}
      fill="url(#paint0_radial_709_7357)"
      fillOpacity={0.4}
    />
    <path
      d="M31 20.9648C31 14.9148 26.05 9.96484 20 9.96484C13.95 9.96484 9 14.9148 9 20.9648C9 26.4648 12.9875 31.0023 18.2125 31.8273V24.1273H15.4625V20.9648H18.2125V18.4898C18.2125 15.7398 19.8625 14.2273 22.3375 14.2273C23.575 14.2273 24.8125 14.5023 24.8125 14.5023V17.2523H23.4375C22.0625 17.2523 21.65 18.0773 21.65 18.9023V20.9648H24.675L24.125 24.1273H21.5125V31.9648C27.0125 31.1398 31 26.4648 31 20.9648Z"
      fill="white"
    />
    <defs>
      <radialGradient
        id="paint0_radial_709_7357"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(12.7869 8.8337) rotate(55.9679) scale(30.4636 30.4636)"
      >
        <stop stopColor="white" />
        <stop offset={0.697917} stopColor="white" stopOpacity={0} />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);
export default SVGComponent;
