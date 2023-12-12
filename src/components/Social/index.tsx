import { FunctionComponent, HTMLAttributes, useEffect } from "react";
import { Linkedin, Twitter, Github, Instagram } from "react-bootstrap-icons";
import cx from "classnames";

// Animation
import { gsap } from "../../../gsap";
import { DEFAULT_ICON_SIZE } from "../../utils/constants";

type SocialProps = HTMLAttributes<HTMLDivElement> & {
  email?: string;
  github?: string;
  linkedIn?: string;
  instagram?: string;
  x?: string;
};

const Social: FunctionComponent<SocialProps> = ({
  github = "https://github.com/samueltih",
  linkedIn = "https://linkedin.com/in/samuel-tih",
  instagram = "#",
  x = "https://twitter.com/",
  ...props
}) => {
  useEffect(() => {
    gsap.fromTo(
      ".social",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 1 }
    );
  }, []);

  return (
    <div
      {...{
        ...props,
        className: cx("flex flex-col gap-4 items-center", props.className),
      }}
    >
      <a href={github} className="social text-slate-500 dark:text-gray-300">
        <Github size={DEFAULT_ICON_SIZE} />
      </a>
      <a href={linkedIn} className="social text-slate-500 dark:text-gray-300">
        <Linkedin size={DEFAULT_ICON_SIZE} />
      </a>
      <a href={instagram} className="social text-slate-500 dark:text-gray-300">
        <Instagram size={DEFAULT_ICON_SIZE} />
      </a>
      <a href={x} className="social text-slate-500 dark:text-gray-300">
        <Twitter size={DEFAULT_ICON_SIZE} />
      </a>
      
    </div>
  );
};

export default Social;
