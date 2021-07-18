import { IShape } from './IShape'
export interface IRectangle extends IShape {
  height: number
  resize(height: number, width: number): void
  width: number
}
