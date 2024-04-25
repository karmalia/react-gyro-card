import React from "react";
import { GetElementPositions, TMouseState, TOnMouseMove } from "./utils.types";

export function getElementCenter(element: HTMLDivElement): GetElementPositions {
  //Kendi merkezi
  const { top, left } = element.getBoundingClientRect();

  return {
    CenterX: left + element.clientWidth / 2,
    CenterY: top + element.clientHeight / 2,
    LeftY: left + element.clientWidth / 3,
    RightY: left + (element.clientWidth / 3) * 2,
    TopX: top + element.clientHeight / 3,
    BottomX: top + (element.clientHeight / 3) * 2,
  };
}

export function useMouseMove(): TOnMouseMove {
  const [mouseState, setMouseState] = React.useState({
    x: 0,
    y: 0,
  });

  const onMouseMove = React.useCallback((e: any) => {
    setMouseState({ x: e.clientX, y: e.clientY });
  }, []);

  return { mouseState, onMouseMove };
}

/*
card.getBoundingClientRect() = kartın width ve height değerlerini verir.
*/

function getPosition(cardCenter: GetElementPositions, mouseState: TMouseState) {
  let x, y;

  if (mouseState.x < cardCenter.LeftY) {
    y = -1;
  } else if (mouseState.x > cardCenter.RightY) {
    y = 1;
  } else {
    y = 0;
  }

  if (mouseState.y < cardCenter.TopX) {
    x = 1;
  } else if (mouseState.y > cardCenter.BottomX) {
    x = -1;
  } else {
    x = 0;
  }

  return {
    x,
    y,
  };
}

export function calculateRotation(
  mouseState: TMouseState,
  card: HTMLDivElement,
  strength?: number,
  parentCenter?: GetElementPositions
): any {
  if (!card) return null;
  //Eğer parentCenter varsa onu kullan yoksa kartın merkezini al
  const { x, y } = getPosition(
    parentCenter || getElementCenter(card),
    mouseState
  );

  return `rotate3d(${x},${y}, 0, ${strength || 12}deg)`;
}
