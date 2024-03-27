import React from "react";

export function getCardCenter(card: HTMLDivElement) {
  //Kendi merkezi
  const { top, left } = card.getBoundingClientRect();

  return {
    CenterX: left + card.clientWidth / 2,
    CenterY: top + card.clientHeight / 2,
    LeftY: left + card.clientWidth / 3,
    RightY: left + (card.clientWidth / 3) * 2,
    TopX: top + card.clientHeight / 3,
    BottomX: top + (card.clientHeight / 3) * 2,
  };
}

export function useMouseMove() {
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

function getPosition(
  cardCenter: {
    CenterX: number;
    CenterY: number;
    LeftY: number;
    RightY: number;
    TopX: number;
    BottomX: number;
  },
  mouseState: {
    x: number;
    y: number;
  }
) {
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
  mouseState: { x: number; y: number },
  card: HTMLDivElement
): any {
  if (!card) return null;

  const { x, y } = getPosition(getCardCenter(card), mouseState);

  return `rotate3d(${x},${y}, 0, 3deg)`;
}
