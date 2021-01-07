import React from "react";

import logoRocket from "../../assets/images/logo-rocket.svg";
import { Button } from "./styles";

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? "active" : ""}
      isHome={isHome}
    >
      {isHome && <img src={logoRocket} alt="Rocketseat" />}
    </Button>
  );
};

export default ServerButton;
