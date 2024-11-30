import { ButtonPrimary, ParagraphText } from "../../atoms";
import { HousePlanSVG, HouseSVG } from "../../atoms/svgs";

import "./style.css";

const OnBoarding = () => {
  return (
    <div>
      <div className="container-title-description">
        <div className="container-title">
          <ParagraphText className="title">
            <ParagraphText className="red-title Redu-title">{"ReEdu"}</ParagraphText>
            {` is
            about changing the way Buyer’s buy `}
            <ParagraphText className="red-title">{`Real Estate.`}</ParagraphText>
          </ParagraphText>
        </div>
        <ParagraphText className="description">
          {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`}
        </ParagraphText>
        <div className="Btn_container">
          <ButtonPrimary>{`Get started`}</ButtonPrimary>
        </div>
      </div>
      <HousePlanSVG className="plans-house-header" />
      <HouseSVG className="house-header" />
    </div>
  );
};
export default OnBoarding;
