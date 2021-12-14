import { FC } from "react";
import Title from "./title";
import SetButton from "./setbutton";
const Header: FC = () => {
  const OpenSettings = (): void => {
    return;
  };

  return (
    <div>
      <Title />
      <SetButton onClick={OpenSettings} />
    </div>
  );
};

export default Header;
