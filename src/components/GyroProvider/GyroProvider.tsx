import React, { Children, forwardRef } from "react";
import { getElementCenter } from "../../utils";

type Props = {
  children: React.ReactNode;
};

function GyroProvider({ children }: Props) {
  const parentRef = React.useRef<HTMLDivElement | any>(null);

  const parentCenter = getElementCenter(parentRef.current);

  function returnChildrenWithRef(children: React.ReactNode) {
    return Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { ...parentCenter });
      }
      return child;
    });
  }

  return <div ref={parentRef}>{returnChildrenWithRef(children)}</div>;
}

export default GyroProvider;
