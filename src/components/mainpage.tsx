import { FC } from "react";
import style from "../style/components/mainpage.module.scss";
import Button from "./button";

type Props = {
  className?: string;
};
const MainPage: FC<Props> = (props) => (
  <div className={`${style.mainpage} ${props.className}`}>
    <Button>File</Button>
  </div>
);

export default MainPage;
