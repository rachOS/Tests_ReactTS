import { IShape } from './IShape'
export interface IRectangle extends IShape {
  height: number
  width: number
  resize(height: number, width: number): void
}
