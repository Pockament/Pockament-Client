import { FC } from "react";
import PagePath from "./pagepath";
import Status from "./status";
import MainPage from "./mainpage";

const Footer: FC = () => (
  <div>
    <Status denom={100} numer={100} />
    <MainPage />
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
