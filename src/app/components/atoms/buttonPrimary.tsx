import { Button } from "antd";
import React from "react";
import { ButtonPrimaryProps } from "../types";

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ children, onClick }) => {
  return (
    <Button
      type="primary"
      className="Btn_primary button"
      size="large"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
