import { IPoints } from './IPoints';

export interface IBounds {
  Location: IPoints;
  Heigth: number;
  Width: number;
  Size(): number;
}
