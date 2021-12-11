import { FC, ReactNode, MouseEvent } from "react";
import style from "../style/button.module.scss";
type Props = {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};
const Button: FC<Props> = (props) => {
  return (
    <button className={style.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
