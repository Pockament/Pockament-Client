import { FC, ReactNode } from "react";
import style from "../style/components/button.module.scss";
type Props = {
  buttonType?: "pull" | "push";
  color?: "primary" | "info" | "success" | "warning" | "danger";
  children: ReactNode;
};
const Button: FC<Props> = ({ buttonType, color, children }) => {
  return (
    <label className={style.filechose}>
      <input type="file" multiple />
      {children}
    </label>
  );
};

export default Button;
