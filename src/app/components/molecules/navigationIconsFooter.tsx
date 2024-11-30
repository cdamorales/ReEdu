"use client";
import { ConfigProvider, Menu } from "antd";
import { FooterIconsMenuProps } from "../types";
import React from "react";
import { FooterIcon } from "../atoms";

const NavigationIconsFooter: React.FC<FooterIconsMenuProps> = ({ items }) => {
  const handleClick = () => {};

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            colorPrimary: "#183D5C",
            colorBgContainer: "#183D5C",
            itemSelectedBg: "#183D5C",
            itemHoverBg: "#183D5C",
            itemHoverColor: "#183D5C",

            itemPaddingInline: 0,
            itemMarginInline: 0,
          },
        },
      }}
    >
      <Menu
        mode="horizontal"
        onClick={handleClick}
        className="border-none gap-5 justify-content-center"
        items={items.map((item, index) => ({
          key: item.key ?? index,
          label: <FooterIcon image={item.image} link={item.link} />,
        }))}
        style={{
          borderBottom: "none",
          width: "100%",
        }}
      />
    </ConfigProvider>
  );
};

export default NavigationIconsFooter;
