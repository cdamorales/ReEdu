import { Flex } from "antd";
import { FooterIconProps, MenuItemInterface } from "../../types";
import { FooterMenuItem, Text } from "../../atoms";
import { NavigationFooter, NavigationIconsFooter } from "../../molecules";
import "./style.css";

const Footer = () => {
  const linksItems: MenuItemInterface[] = [
    {
      key: "home",
      label: "Home",
      color: "#fff",
      fontSize: 20,
      fontWeigth: "normal",
    },
    {
      key: "about",
      label: "About",
      color: "#fff",
      fontSize: 20,
      fontWeigth: "normal",
    },
    {
      key: "content",
      label: "Content",
      color: "#fff",
      fontSize: 20,
      fontWeigth: "normal",
    },
    {
      key: "learners",
      label: "Learners",
      color: "#fff",
      fontSize: 20,
      fontWeigth: "normal",
    },
    {
      key: "creators",
      label: "Creators",
      color: "#fff",
      fontSize: 20,
      fontWeigth: "normal",
    },
  ];

  const supportItems: MenuItemInterface[] = [
    {
      key: "contact_us",
      label: "Contact Us",
      color: "#fff",
      fontSize: 20,
      fontWeigth: "normal",
    },
    {
      key: "terms_and_conditions",
      label: "Terms & Conditions",
      color: "#fff",
      fontSize: 20,
      fontWeigth: "normal",
    },
    {
      key: "privacy_policy",
      label: "Privacy Policy",
      color: "#fff",
      fontSize: 20,
      fontWeigth: "normal",
    },
  ];

  const iconsItems: FooterIconProps[] = [
    {
      key: "facebook_icon",
      image: "facebook",
      link: "https://www.facebook.com",
    },
    {
      key: "x_icon",
      image: "x",
      link: "https://www.facebook.com",
    },
    {
      key: "insta_icon",
      image: "insta",
      link: "https://www.facebook.com",
    },
    {
      key: "lkdin_icon",
      image: "lkdin",
      link: "https://www.facebook.com",
    },
  ];

  const contactItems: MenuItemInterface[] = [
    {
      key: "number_contact",
      label: "(808) 123 4567",
      color: "#fff",
      fontSize: 20,
      fontWeigth: "normal",
    },
    {
      key: "email_contact",
      label: "support@reedu.com",
      color: "#fff",
      fontSize: 20,
      fontWeigth: "normal",
    },
  ];
  return (
    <Flex vertical={true} className="Container_footer">
      <Flex vertical={false} className="pad-2 Subcontainer_footer">
        <Flex className="Subcontainer_presentation " vertical={true}>
          <h1 className="white-title Redu-title">ReEdu</h1>
          <div className="Subcontainer_presentation mar-top-20">
            <FooterMenuItem
              label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
              fontSize={20}
              color="#FFFFF"
              fontWeight="normal"
              key={"generalText"}
            />
          </div>
        </Flex>

        <Flex className="w-15 " vertical={true}>
          {/* Left: Navigation Menu */}
          <Text label="Links" color="#FFFFFF" fontWeight="bold" size={32} />
          <NavigationFooter items={linksItems} />
        </Flex>

        <Flex className="w-20 " vertical={true}>
          {/* Left: Navigation Menu */}
          <Text
            label="Support & Support"
            color="#FFFFFF"
            fontWeight="bold"
            size={32}
          />
          <NavigationFooter items={supportItems} />
        </Flex>

        <Flex className="w-15 " vertical={true}>
          {/* Left: Navigation Menu */}
          <Text label="Contact" color="#FFFFFF" fontWeight="bold" size={32} />
          <NavigationFooter items={contactItems} />
        </Flex>
      </Flex>
      <Flex vertical={false} className="pad-2 bdr-1-wh">
        <Flex className="w-80 " vertical={true}>
          <Text
            label="© 2023 ReEdu, LLC"
            color="#FFFFFF"
            fontWeight="normal"
            size={20}
          />
        </Flex>
        <Flex className="w-20" vertical={false}>
          <NavigationIconsFooter items={iconsItems} />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Footer;
