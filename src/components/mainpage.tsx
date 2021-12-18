import { FC, useEffect, useState } from "react";
import style from "../style/components/mainpage.module.scss";
import Button from "./button";
import { invoke } from "@tauri-apps/api/tauri";

type Props = {
  className?: string;
};
const MainPage: FC<Props> = (props) => {
  //ファイル名を取得できる
  const [filename, setFilename] = useState<string[]>();
  // inputから取得できるURL
  const [pullURL, setPullURL] = useState<string>("");

  const onfileInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let file: FileList | null = e.target.files;
    let namelist: string[] = [];
    if (file === null) return;
    for (let i of file) {
      namelist.push(i.name);
    }
    setFilename(namelist);
  };

  const onChangeURL = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPullURL(e.target.value);
  };

  const emitEventPush = () => {
    invoke("push", {
      uri: pullURL,
      path: `${process.env.HOME}/${filename?.[0]}`,
    });
  };

  const emitEventPull = () => {
    invoke("pull", {
      port: 8080
    });
  };

  return (
    <div className={`${style.mainpage} ${props.className}`}>
      <div className={style.input_url}>
        <p className={style.message}>URL</p>
        <input
          type="text"
          placeholder="Please input URL"
          onChange={onChangeURL}
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
