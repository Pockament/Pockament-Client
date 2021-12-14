import { FC, MouseEvent } from "react";
import Button from "./button";
type Props = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};
const SetButton: FC<Props> = (props) => {
  return <Button onClick={props.onClick}>{"set"}</Button>;
};

export default SetButton;
