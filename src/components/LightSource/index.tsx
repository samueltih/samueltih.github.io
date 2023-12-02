import { FunctionComponent, HTMLAttributes, useEffect, useState } from "react";
import cx from "classnames";

type LightSourceProps = HTMLAttributes<HTMLSpanElement> & {
    color?: string,
    deviation?: number
};

const LightSource: FunctionComponent<LightSourceProps> = ({color = 'rgba(60, 0, 190, 0.1)', deviation = 0, ...props}) => {
    const BEAM_DIAMETER: number = 700;

    const [pos, setPos] = useState({x: 0, y: 0});

    function handleMouseMove(ev: MouseEvent) {
        setPos({x: ev.pageX - (BEAM_DIAMETER / 2), y: ev.pageY - (BEAM_DIAMETER / 2)});
    }

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove)
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }, [])

    return (<div {...{...props, className: cx("animate-pulse absolute rounded-full z-10 bg-emerald-200 bg-opacity-40 transtion flex items-center justify-center", props.className)}} style={{
        top: pos.y + deviation,
        left: pos.x + deviation,
        height: BEAM_DIAMETER,
        width: BEAM_DIAMETER,
        background: `radial-gradient(circle at center, ${color} 0%, #ffffff00 100%)`,
        transition: 'width 0.3s ease-in-out',
        filter: 'blur(160px)'
    }}>
    </div>)
}

export default LightSource;