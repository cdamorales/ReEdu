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
    <rect x={0.5} y={1.46484} width={39} height={39} rx={7.5} fill="#183D5C" />
    <rect x={0.5} y={1.46484} width={39} height={39} rx={7.5} stroke="white" />
    <path
      d="M28.9479 10.4648H11.0521C10.1957 10.4648 9.5 11.1397 9.5 11.9688V29.9609C9.5 30.7928 10.1957 31.4648 11.0521 31.4648H28.9479C29.8043 31.4648 30.5 30.79 30.5 29.9609V11.9688C30.5 11.1369 29.8043 10.4648 28.9479 10.4648ZM15.8662 28.0466H12.6956V18.563H15.8662V28.0466ZM14.2809 17.2684H14.2615C13.1972 17.2684 12.5099 16.5412 12.5099 15.6295C12.5099 14.7177 13.2194 13.9906 14.3031 13.9906C15.3868 13.9906 16.0547 14.6984 16.0769 15.6295C16.0769 16.5384 15.3895 17.2684 14.2837 17.2684H14.2809ZM27.3044 28.0466H24.1338V22.9728C24.1338 21.6975 23.6737 20.8271 22.5263 20.8271C21.6505 20.8271 21.1294 21.4138 20.8994 21.9812C20.8162 22.1851 20.794 22.466 20.794 22.7497V28.0466H17.6234C17.6234 28.0466 17.665 19.4526 17.6234 18.563H20.794V19.9071C21.2153 19.2598 21.9692 18.3426 23.6515 18.3426C25.7385 18.3426 27.3044 19.6978 27.3044 22.612V28.0493V28.0466Z"
      fill="white"
    />
  </svg>
);
export default SVGComponent;