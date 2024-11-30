import NavigationMenu from "../molecules/navigationMenu";
import ButtonPrimary from "../atoms/buttonPrimary";
import { Flex } from "antd";
import "../../styles/header.css";

const Header = () => {
  return (
    <>
      <Flex vertical={false} className="Container_header">
        <div>
          <h1 className="red-title Redu-title">ReEdu</h1>
        </div>

        <div className="w-50">
          {/* Left: Navigation Menu */}
          <NavigationMenu />
        </div>

        {/* Right: Contact Us Button */}
        <div className="Btn_container">
          <ButtonPrimary>Contact Us</ButtonPrimary>
        </div>
      </Flex>
    </>
  );
};
export default Header;
