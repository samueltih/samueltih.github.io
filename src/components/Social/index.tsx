import { FunctionComponent, HTMLAttributes, useEffect } from "react";
import { Linkedin, Twitter, Github, Instagram } from "react-bootstrap-icons";
import cx from "classnames";

// Animation
import { gsap } from "../../../gsap";

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
        <Github size={25} />
      </a>
      <a href={linkedIn} className="social text-slate-500 dark:text-gray-300">
        <Linkedin size={25} />
      </a>
      <a href={'#'} className="social text-slate-500 dark:text-gray-300">
        <Instagram size={25} />
      </a>
      <a href={x} className="social text-slate-500 dark:text-gray-300">
        <Twitter size={25} />
      </a>
      
    </div>
  );
};

export default Social;
