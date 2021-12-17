import { FC } from "react";
import style from "../style/components/pagepath.module.scss";

type Props = {
  className: string;
};
const PagePath: FC<Props> = (props) => (
  <div className={`${style.pagepath} ${props.className}`}>
    <div className={style.download}>Download</div>
    <div className={style.filepath}>{`${"~/Pictures/Pockament"}`}</div>
  </div>
);

export default PagePath;
