import { FC } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import MainPage from "./components/mainpage";
import style from "./style/components/app.module.scss";

const App: FC = () => (
  <div>
    <div className={style.main}>
      <Header className={style.header}/>
      <MainPage className={""} />
      <Footer className={style.footer}/>
    </div>
  </div>
);

export default App;
