import { FC } from "react";
import style from "../style/components/status.module.scss";

type Props = {
  // 分子
  numer: number;
  // 分母
  denom: number;
};
const Status: FC<Props> = ({ denom, numer }) => (
  <div className={style.status}>
    <div className={style.ratio}>{`${numer} / ${denom}`}</div>
    <div className={style.item_name}>Status</div>
  </div>
);

export default Status;

/* 作る機能
 * ============
 * 残りファイル数 8/152 みたいに
 * ============
 */
