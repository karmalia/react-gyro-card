import React, { FC, useEffect } from "react";
import "./GyroCard.css";
import { calculateRotation, useMouseMove } from "../../utils/index";
import { GyroCardProps } from "./GyroCard.types";

function GyroCard({ children }: GyroCardProps) {
  const capsuleRef = React.useRef<HTMLDivElement | any>(null);

  const { mouseState, onMouseMove } = useMouseMove();
  useEffect(() => {
    if (!capsuleRef.current) return;
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [mouseState.x, mouseState.y]);

  return (
    <div className={"capsule"}>
      <div
        ref={capsuleRef}
        style={{
          transform: calculateRotation(mouseState, capsuleRef.current),
        }}
        className={"innerCapsule"}
      >
        {children}
      </div>
    </div>
  );
}

export default GyroCard;
