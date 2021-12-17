import { FC } from "react";
import { Settings } from "react-feather";

type Props = {
  onClick: () => void;
  className: string;
};
const SetButton: FC<Props> = ({ onClick, className }) => (
  <div onClick={onClick} role="button" tabIndex={0}>
    <Settings size={30} className={className} />
  </div>
);

export default SetButton;
