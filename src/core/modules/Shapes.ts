import { IBounds } from '../contract/IBounds'
import { Bounds } from '../entities/Bound'
import { Point } from '../entities/Point'
import { ShapeType } from '../enums/ShapeType'

export { ShapeType }

export const point1: Point = new Point(1, 13)
export const point2: Point = new Point(2, 21)
export class Shape {
  private p1: Point = point1
  private p2: Point = point2
  public Type: ShapeType = ShapeType.Rectangle
  public Bounds: IBounds = new Bounds()
}
