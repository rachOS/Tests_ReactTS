import { IPoint } from './IPoint'

export interface ILine {
  point1: IPoint
  point2: IPoint
  length(): number
}
