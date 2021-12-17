import { FC } from "react";
import Title from "./title";
import SetButton from "./setbutton";

import style from "../style/components/header.module.scss";

type Props = {
  className: string;
};
const Header: FC<Props> = (props) => {
  const openSetting = (): void => {
    console.log("open setting");
  };
  return (
    <div className={`${style.header} ${props.className}`}>
      <Title className={style.title} title="Test" />
      <SetButton className={style.setbutton} onClick={openSetting} />
    </div>
  );
};

export default Header;
