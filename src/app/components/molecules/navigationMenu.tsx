"use client";
import { ConfigProvider, Menu } from "antd";
import { useState } from "react";
import { MenuItemInterface } from "../types";
import React from "react";
import { MenuItem } from "../atoms";

const menuItems: MenuItemInterface[] = [
  { key: "home", label: "Home" },
  { key: "about", label: "About" },
  { key: "content", label: "Content" },
  { key: "learners", label: "Learners" },
  { key: "creators", label: "Creators" },
];

const NavigationMenu: React.FC = () => {
  const [selectedKey] = useState("home");
  const handleClick = () => {};

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            horizontalItemSelectedColor: "#BD142D",
            horizontalItemHoverColor: "#0E0E0E",
          },
        },
      }}
    >
      <Menu
        mode="horizontal"
        className="border-none gap-5 justify-content-center"
        selectedKeys={[selectedKey]}
        onClick={handleClick}
        items={menuItems.map((item) => ({
          key: item.key,
          label: (
            <MenuItem label={item.label} isActive={selectedKey === item.key} />
          ),
        }))}
      />
    </ConfigProvider>
  );
};

export default NavigationMenu;
