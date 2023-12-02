import { FunctionComponent, HTMLAttributes } from "react";
import cx from "classnames";

type TagProps = HTMLAttributes<HTMLSpanElement>;

const Tag: FunctionComponent<TagProps> = ({ children, ...props }) => {
  return (
    <span
      {...{
        ...props,
        className: cx(
          "px-2 py-1 bg-indigo-700 text-sm font-semibold rounded-lg",
          props.className
        ),
      }}
    >
      {children}
    </span>
  );
};

export default Tag;
