import { FC, ReactNode, MouseEvent } from "react";
type Props = {
  className:string;
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};
const Button: FC<Props> = ({className,children,onClick}) => {
  return <button className={className} onClick={onClick}>{children}</button>;
};

export default Button;
