"use client";
import { ConfigProvider, Menu } from "antd";
import { FooterMenuProps } from "../types";
import React from "react";
import { FooterMenuItem } from "../atoms";

const NavigationFooter: React.FC<FooterMenuProps> = ({ items }) => {
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
        mode="vertical"
        onClick={handleClick}
        style={{
          backgroundColor: "#183D5C",
        }}
        items={items.map((item) => ({
          key: item.key,
          label: (
            <FooterMenuItem
              label={item.label}
              color={item.color ?? "#fff"}
              fontSize={item.fontSize ?? 20}
              fontWeight={item.fontWeigth ?? "normal"}
            />
          ),
        }))}
      />
    </ConfigProvider>
  );
};

export default NavigationFooter;
