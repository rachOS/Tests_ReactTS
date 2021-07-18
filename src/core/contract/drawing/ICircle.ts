import { IShape } from './IShape'
export interface ICircle extends IShape {
  area(): number
  radius: number
  resize(radius: number): void
}
