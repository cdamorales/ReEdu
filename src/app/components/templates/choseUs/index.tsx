import { ParagraphText } from "../../atoms";
import {
  ContnetIcon,
  CreatorIcon,
  CustomAvatarIcon,
  LearnIcon,
} from "../../atoms/icons";

import "./style.css";

const WhoWeAre = () => {
  return (
    <div className="container-choose-us">
      <div>
        <ParagraphText className="title-choose-us">
          {`Why `}
          <ParagraphText className="red-title">{`Choose Us`}</ParagraphText>
        </ParagraphText>
      </div>
      <div className="cards-choose-us">
        <div className="card">
          <div>
            <div>
              <CustomAvatarIcon />
            </div>
            <h2 className="title-cards-choose-us">{`Custom Avatar`}</h2>
            <div>
              <ParagraphText className="description">
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's`}
              </ParagraphText>
            </div>
          </div>
        </div>
        <div className="card">
          <div>
            <div>
              <LearnIcon />
            </div>
            <h2 className="title-cards-choose-us">Learn How To Buy</h2>
            <div>
              <ParagraphText className="description">
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's`}
              </ParagraphText>
            </div>
          </div>
        </div>
        <div className="card">
          <div>
            <div>
              <CreatorIcon />
            </div>
            <h2 className="title-cards-choose-us">{`Creators`}</h2>
            <div>
              <ParagraphText className="description">
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's`}
              </ParagraphText>
            </div>
          </div>
        </div>
        <div className="card">
          <div>
            <div>
              <ContnetIcon />
            </div>
            <h2 className="title-cards-choose-us">Content</h2>
            <div>
              <ParagraphText className="description">
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's`}
              </ParagraphText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhoWeAre;
