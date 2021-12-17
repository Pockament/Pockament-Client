import { FC } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./components/mainpage";
import style from "./style/components/app.module.scss";

const App: FC = () => (
  <div>
    <div className={style.app_left}>
      <Header className={style.header} />
      <MainPage className={style.mainpage} />
      <Footer className={style.footer} />
    </div>
  </div>
);

export default App;
