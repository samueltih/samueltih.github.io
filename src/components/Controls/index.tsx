import { HTMLAttributes, FunctionComponent, useEffect } from "react";
import { SunFill, MoonFill } from "react-bootstrap-icons";
import ReactCountryFlag from "react-country-flag";
import cx from 'classnames';

// Animation
import { gsap } from "../../../gsap";
import { DEFAULT_ICON_SIZE } from "@utils/constants";

type ControlsProps = HTMLAttributes<HTMLDivElement> & {
    locale: 'en' | 'fr',
    theme: 'dark' | 'light',
    onThemeChange: () => void,
    onLocaleChange: () => void

}

const Controls: FunctionComponent<ControlsProps> = ({locale, theme, onThemeChange, onLocaleChange, ...props}) => {
    useEffect(() => {
        gsap.fromTo(
            ".controls",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, stagger: 1 }
          );
    }, [])

    return (<div
        {...{...props, className: cx("flex flex-col gap-4 items-center", props.className)}}
      >
        <button
          className="controls text-slate-500 dark:text-white"
          onClick={onThemeChange}
        >
          {theme === "light" ? (
            <SunFill size={DEFAULT_ICON_SIZE} />
          ) : (
            <MoonFill size={DEFAULT_ICON_SIZE} />
          )}
        </button>
        <button
          className="controls flex gap-2 items-center dark:text-white"
          onClick={onLocaleChange}
        >
          {locale === "fr" ? (
            <ReactCountryFlag countryCode="FR" />
          ) : (
            <ReactCountryFlag countryCode="US" />
          )}
        </button></div>);
}

export default Controls;