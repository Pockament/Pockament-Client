import { FC, useState } from "react";
import Title from "./title";
import SetButton from "./setbutton";

import style from "../style/components/header.module.scss";


type Props = {
  className: string;
};
const Header: FC<Props> = (props) => {
  const [title, setTitle] = useState("");

  return (
    <header className={`${style.header} ${props.className}`}>
      <Title className={style.title} title={title} />
      <SetButton className={style.setbutton} />
    </header>
  );
};

export default Header;
