import { FunctionComponent, HTMLAttributes } from "react";

type TagProps = HTMLAttributes<HTMLSpanElement>;

const Tag: FunctionComponent<TagProps> = ({ children, ...props }) => {
  return (
    <span
      {...{
        className: `px-2 py-1 text-sm bg-indigo-500 bg-opacity-30 rounded ${props.className}`,
        ...props,
      }}
    >
      {children}
    </span>
  );
};

export default Tag;
