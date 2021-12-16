import { FC } from "react";
import { Settings } from "react-feather";
type Props = {
  onClick: () => void;
  className: string;
};
const SetButton: FC<Props> = ({ onClick, className }) => {
  return (
    <div onClick={onClick}>
      <Settings size={30}  className={className} />
    </div>
  );
};

export default SetButton;
