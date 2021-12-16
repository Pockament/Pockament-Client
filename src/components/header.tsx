import { FC } from "react";
import Title from "./title";
import SetButton from "./setbutton";

import style from "../style/components/header.module.scss";

const Header: FC = () => {
  const OpenSettings = (): void => {
    return;
  };

  return (
    <div className={style.header}>
      <Title />
      <SetButton onClick={OpenSettings} />
    </div>
  );
};

export default Header;
