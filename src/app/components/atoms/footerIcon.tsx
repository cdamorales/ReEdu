import React from "react";
import { FooterIconProps } from "../types";
import { FBIcon, InstaIcon, LinkIcon, TwtIcon } from "./icons";

const FooterIcon: React.FC<FooterIconProps> = ({ image }) => {
  switch (image) {
    case "facebook":
      return <FBIcon />;
    case "x":
      return <TwtIcon />;
    case "lkdin":
      return <LinkIcon />;
    case "insta":
      return <InstaIcon />;
  }
};
export default FooterIcon;
