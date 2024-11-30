import React from "react";
import { ParagraphText } from "../atoms";
import { ChefSVG, QuotationMarksSVG, StudentSVG } from "../atoms/svgs";
import { CardLearnerProps } from "../types";
import Image from "next/image";

const NavigationFooter: React.FC<CardLearnerProps> = ({
  name,
  text,
  relationship,
  avatar,
  img,
}) => {
  let avatarSVG = <></>;

  switch (avatar) {
    case "chef":
      avatarSVG = <ChefSVG />;
      break;
    case "student":
      avatarSVG = <StudentSVG />;
      break;
    default:
      avatarSVG = <StudentSVG />;
      break;
  }

  return (
    <div className="card-learner">
      <div className="content">
        <div>
          <QuotationMarksSVG />
        </div>
        <div className="description-learner">
          <ParagraphText className={"no-class-name"}>{text}</ParagraphText>
          <div className="chef-bg">{avatarSVG}</div>
        </div>
      </div>
      <div className="header">
        <Image src={img} height={80} width={80} alt="leaders" />
        <div className="names">
          <ParagraphText className="title">{name}</ParagraphText>
          <ParagraphText className="role">{relationship}</ParagraphText>
        </div>
      </div>
    </div>
  );
};

export default NavigationFooter;
