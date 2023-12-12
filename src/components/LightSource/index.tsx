import { FunctionComponent, HTMLAttributes } from "react";
import cx from "classnames";

type LightSourceProps = HTMLAttributes<HTMLSpanElement> & {
    x?: number,
    y?: number,
    color?: string,
    deviation?: number
};

const LightSource: FunctionComponent<LightSourceProps> = ({x = 0, y = 0, color = 'rgba(60, 0, 190, 0.1)', deviation = 0, ...props}) => {
    const BEAM_DIAMETER: number = 700;

    return (<div {...{...props, className: cx("animate-pulse absolute rounded-full z-10 bg-emerald-200 bg-opacity-40 transtion flex items-center justify-center", props.className)}} style={{
        top: y + deviation - (BEAM_DIAMETER / 2),
        left: x + deviation - (BEAM_DIAMETER / 2),
        height: BEAM_DIAMETER,
        width: BEAM_DIAMETER,
        background: `radial-gradient(circle at center, ${color} 0%, #ffffff00 100%)`,
        transition: 'width 0.3s ease-in-out',
        filter: 'blur(160px)'
    }} />)
}

export default LightSource;