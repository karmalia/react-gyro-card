import React, { forwardRef, useEffect } from "react";
import "./GyroCard.css";
import { calculateRotation, useMouseMove } from "../../utils/index";
import { EPerspective, GyroCardProps } from "./GyroCard.types";

function GyroCard({
  children,
  strength,
  classNames,
  duration,
  easing,
  perspective,
  parentCenter,
}: GyroCardProps): React.JSX.Element {
  const cardRef = React.useRef<HTMLDivElement | any>(null);

  const { mouseState, onMouseMove } = useMouseMove();
  useEffect(() => {
    if (!cardRef.current) return;
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [mouseState.x, mouseState.y]);

  const providerStyle = {
    perspective: perspective ? EPerspective[perspective] : "1000px",
  };

  const innerCapsuleStyle = {
    transform: calculateRotation(
      mouseState,
      cardRef.current,
      strength,
      parentCenter
    ),
    transition: `transform ${duration || 0.5}s ${easing || "ease-in-out"}`,
  };

  return (
    <div className={"gyroProvider"} style={providerStyle}>
      <div
        ref={cardRef}
        style={innerCapsuleStyle}
        className={`innerCapsule ${classNames || classNames}`}
      >
        {children}
      </div>
    </div>
  );
}

export default GyroCard;
