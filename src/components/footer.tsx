import { FC } from "react";
import PagePath from "./pagepath";
import Status from "./status";

type Props = {
  className: string;
};
const Footer: FC<Props> = (props) => (
  <div className={props.className}>
    <Status denom={100} numer={100} />
    <PagePath className="" />
  </div>
);

export default Footer;

/*
 * 作る機能
 * =========
 * パンくずリスト
 * ルーティングなどもここでやる
 * =========
 */
