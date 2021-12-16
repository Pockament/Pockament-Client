import { FC } from "react";
import style from "../style/components/pagepath.module.scss";

type Props = {
  className: string;
};
const PagePath: FC<Props> = (props) => (
  <div className={`${style.pagepath} ${props.className}`}>test</div>
);

export default PagePath;
