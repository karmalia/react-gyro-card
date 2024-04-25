import { GetElementPositions } from "../../utils/utils.types";

export interface GyroCardProps {
  children: React.ReactNode | undefined;
  strength?: number;
  classNames?: string;
  duration?: number;
  easing?: string;
  perspective?: EPerspective | undefined;
  parentCenter?: GetElementPositions | undefined;
}

export enum EPerspective {
  "high" = 2000,
  "default" = 1000,
  "low" = 500,
  "lowest" = 100,
}
