import { HTMLAttributes, FunctionComponent } from "react";
import { FormattedMessage } from "react-intl";
import cx from "classnames";
import { CircleFill } from "react-bootstrap-icons";
import { Section } from "../../App";

type MenuProps = HTMLAttributes<HTMLUListElement> & {
    active?: Section
};

const Menu: FunctionComponent<MenuProps> = ({ active, ...props }) => {
  return (
    <ul {...{...props, className: cx("h-full list-none pl-0 capitalize md:text-lg", props.className)}}>
      <li>
        <a href="#about" className={cx("flex gap-2 items-center transition-all", {'text-slate-700 dark:text-slate-500': active !== 'about'})}>
          <FormattedMessage id="about" /> {active === 'about' && <CircleFill size={7} className="animate-bounce"/>}
        </a>
      </li>
      <li>
        <a href="#experiences" className={cx("flex gap-2 items-center transition-all", {'text-slate-700 dark:text-slate-500': active !== 'experiences'})}>
          <FormattedMessage id="workExperience" />  {active === 'experiences' && <CircleFill size={7} className="animate-bounce"/>}
        </a>
      </li>
      <li>
        <a href="#gigs" className={cx("flex gap-2 items-center transition-all", {'text-slate-700 dark:text-slate-500': active !== 'gigs'})}>
          <FormattedMessage id="freelance" />{active === 'gigs' && <CircleFill size={7} className="animate-bounce"/>}
        </a>
      </li>
      <li>
        <a href="#projects" className={cx("flex gap-2 items-center transition-all", {'text-slate-700 dark:text-slate-500': active !== 'projects'})}>
          <FormattedMessage id="projects" />{active === 'projects' && <CircleFill size={7} className="animate-bounce"/>}
        </a>
      </li>
    </ul>
  );
};

export default Menu;
