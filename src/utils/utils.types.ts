export type GetElementPositions = {
  CenterX: number;
  CenterY: number;
  LeftY: number;
  RightY: number;
  TopX: number;
  BottomX: number;
};

export type TOnMouseMove = {
  mouseState: TMouseState;
  onMouseMove: (e: any) => void;
};

export type TMouseState = {
  x: number;
  y: number;
};
