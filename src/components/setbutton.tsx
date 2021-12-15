import { FC } from "react";
import { Settings } from "react-feather";
type Props = {
  onClick: () => void;
};
const SetButton: FC<Props> = (props) => {
  return <Settings onClick={props.onClick} />;
};

export default SetButton;
