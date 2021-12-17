import { FC } from "react";
import style from "../style/components/mainpage.module.scss";

type Props = {
  className: string;
};
const MainPage: FC<Props> = (props) => (
  <div className={`${style.mainpage} ${props.className}`}>Test</div>
);

export default MainPage;
