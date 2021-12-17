import { FC } from "react";

type Props = {
  title: string;
  className: string;
};
const Title: FC<Props> = ({ title, className }) => (
  <p className={className}>{title}</p>
);

export default Title;
