import { FC, ReactNode } from "react";
import style from "../style/components/button.module.scss";
type Props = {
  buttonType?: "pull" | "push";
  color?: "primary" | "info" | "success" | "warning" | "danger";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  className?: string;
  children: ReactNode;
};
const Button: FC<Props> = ({
  buttonType,
  onClick,
  children,
  onChange,
  className,
}) => {
  return buttonType === "push" ? (
    <label className={`${style.filechose} ${className}`} onClick={onClick}>
      <input type="file" onChange={onChange} multiple />
      {children}
    </label>
  ) : (
    <label className={`${style.filepull} ${className}`} onClick={onClick}>
      {children}
    </label>
  );
};

export default Button;
