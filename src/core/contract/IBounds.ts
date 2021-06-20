import { IPoints } from './IPoints';

export default interface IBounds {
  Location: IPoints;
  Heigth: number;
  Width: number;
  Size(): number;
}
