import "./style.css";
import React from "react";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { ButtonPrimary, ParagraphText } from "../../atoms";
import {
  EmailIcon,
  FacebookLogoV2Icon,
  InstagramV2Icon,
  LinkedInV2Icon,
  LocationIcon,
  PhoneIcon,
} from "../../atoms/icons";

const ContactUs = () => {
  return (
    <div className="container-contact-us">
      <div className="details">
        <div className="description-contact">
          <ParagraphText className="title-contact">{`Contact Us`}</ParagraphText>
          <ParagraphText className="desc-contact">
            {` Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,`}
          </ParagraphText>
          <div className="info-contact">
            <div className="contact-row">
              <PhoneIcon />
              <ParagraphText
                className={"no-class-name"}
              >{`864.672.4675`}</ParagraphText>
            </div>
            <div className="contact-row">
              <EmailIcon />
              <ParagraphText
                className={"no-class-name"}
              >{`info@reedu.com`}</ParagraphText>
            </div>
            <div className="contact-row">
              <LocationIcon />
              <ParagraphText className={"no-class-name"}>
                {`333 Wade Hampton Blvd Greenville, SC 29609`}
              </ParagraphText>
            </div>
          </div>
        </div>
        <div className="social-btns">
          <FacebookLogoV2Icon />
          <LinkedInV2Icon />
          <InstagramV2Icon />
        </div>
      </div>
      <div className="form">
        <div className="row-form">
          <span className="field-name">First Name</span>
          <Input size="large" placeholder="Enter First Name" />
        </div>
        <div className="row-form">
          <span className="field-name">Last Name</span>
          <Input size="large" placeholder="Enter Last Name" />
        </div>
        <div className="row-form">
          <span className="field-name">Email</span>
          <Input size="large" placeholder="Enter Email" />
        </div>
        <div className="row-form">
          <span className="field-name">Phone Number</span>
          <Input size="large" placeholder="Enter Phone Number" />
        </div>
        <div className="row-form">
          <span className="field-name">Message</span>
          <TextArea rows={11} />
        </div>
        <div>
          <ButtonPrimary>Submit</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
