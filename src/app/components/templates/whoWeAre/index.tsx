import { ParagraphText } from "../../atoms";
import { HouseWhoWeAreSVG } from "../../atoms/svgs";

import "./style.css";

const WhoWeAre = () => {
  return (
    <div className="container-who_we_are bg">
      <div className="container-house_who_we_are">
        <HouseWhoWeAreSVG />
      </div>
      <div className="container-title-who_we_are">
        <div className="title-who_we_are">Who We Are</div>
        <div className="who_we_are-descriptions">
          <ParagraphText className="description">
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,`}
          </ParagraphText>
          <br />
          <br />
          <ParagraphText className="description">
            {`when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s`}
          </ParagraphText>
          <br />
          <br />
          <ParagraphText className="description">
            {`with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.`}
          </ParagraphText>
          <br />
          <br />
          <ul className="lista-who_we_are">
            <li>
              <ParagraphText className={"no-class-name"}>
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.`}
              </ParagraphText>
            </li>
            <li>
              <ParagraphText className={"no-class-name"}>
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.`}
              </ParagraphText>
            </li>
            <li>
              <ParagraphText className={"no-class-name"}>
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.`}
              </ParagraphText>
            </li>
            <li>
              <ParagraphText className={"no-class-name"}>
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.`}
              </ParagraphText>
            </li>
            <li>
              <ParagraphText className={"no-class-name"}>
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.`}
              </ParagraphText>
            </li>
            <li>
              <ParagraphText className={"no-class-name"}>
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.`}
              </ParagraphText>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default WhoWeAre;
