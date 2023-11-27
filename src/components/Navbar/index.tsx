import { FunctionComponent, HTMLAttributes } from "react";

type NavigationProps = HTMLAttributes<HTMLDivElement>;

const Navigation: FunctionComponent<NavigationProps> = ({ ...props }) => {
  return (
    <nav
      {...{
        className: `flex justify-center p-4 bg-yellow-300 ${
          props.className ?? ""
        }`,
        ...props,
      }}
    >
      <div className="max-w-screen-xl w-full flex gap-16">
        <div className="flex-1">TIH SAMUEL MBIYIMO'O</div>
        <a href="#about">About</a>
        <a href="#experiences">Experiences</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navigation;
