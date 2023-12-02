import { FunctionComponent, HTMLAttributes } from "react";
import { Globe, Github } from "react-bootstrap-icons";
import cx from "classnames";
import Tag from "../Tag";

type CardProps = HTMLAttributes<HTMLDivElement> & {
    image?: string,
    title?: string,
    tags?: Array<string>
};

const Card: FunctionComponent<CardProps> = ({ title, image, tags = [], children, ...props }) => {
    console.log("Tags: ", tags);
  return (
    <div {...{...props, className: cx("hover:cursor-pointer relative flex gap-4 items-center my-4 z-20", props.className)}}>
      <div className="shadow absolute -z-10 -left-2 top-4 h-full w-full rounded-lg -left-4 top-6 bg-slate-500 bg-opacity-10 dark:bg-slate-400 dark:bg-opacity-10" />
      <img
        src={image}
        alt="project-image"
        className="w-[9.5rem]"
      />
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex gap-3 items-center">
          <h2 className="my-0 flex-1">{title}</h2>
          <a href="https://carcam.cm">
            <Globe size={20} />
          </a>
          <a href="https://github.com/samueltih">
            <Github size={20} />
          </a>
        </div>
        <p className="my-2">
          {children}
        </p>
        <div className="flex gap-2 items-center flex-wrap text-sm text-white">
          {tags.map((tag, index) => (<Tag key={index}>{tag}</Tag>))}
        </div>
      </div>
    </div>
  );
};

export default Card;
