import { FunctionComponent, HTMLAttributes } from "react";

type LoaderProps = HTMLAttributes<HTMLDivElement>;

const Loader: FunctionComponent<LoaderProps> = ({ ...props }) => {
  return <div {...props}>Loading...</div>;
};

export default Loader;
