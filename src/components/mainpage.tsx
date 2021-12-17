import { FC, useState } from "react";
import style from "../style/components/mainpage.module.scss";
import Button from "./button";

type Props = {
  className?: string;
};
const MainPage: FC<Props> = (props) => {
  const [filename, setFilename] = useState<string[]>();

  const onfileInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let file: FileList | null = e.target.files;
    let namelist: string[] = [];
    if (file === null) return;
    for (let i of file) {
      namelist.push(i.name);
    }
    setFilename(namelist);
  };

  const emitEventPush = () => {
    console.log(filename);
  };

  const emitEventPull = () => {
    console.log("Start");
  };

  return (
    <div className={`${style.mainpage} ${props.className}`}>
      <div className={style.input_url}>
        <p className={style.message}>URL</p>
        <input
          type="text"
          placeholder="Please input URL"
          className={style.input}
        />
      </div>
      <div>
        <div className={style.push_pull}>
          <Button
            buttonType="push"
            onChange={onfileInputChange}
            onClick={emitEventPush}
            className={style.push}
          >
            Push
          </Button>
          <Button
            buttonType="pull"
            onClick={emitEventPull}
            className={style.pull}
          >
            Pull
          </Button>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
