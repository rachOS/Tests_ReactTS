import { IPoints } from '../contract/IPoints'
import { Bounds } from '../entities/Bound'

export namespace Drawing {
  import Bounds = Drawing.IBounds

  export enum ShapeType {
    Rectangle = 3,
    Circle,
    Line,
    Freehand,
  }

  export interface IBounds {
    Location: IPoints
    Heigth: number
    Width: number
    Size(): number
  }

  export interface IShape {
    Type: ShapeType
    Bounds: Drawing.IBounds
  }

  export class Shape {
    public Type: ShapeType = ShapeType.Rectangle
    public Bounds: Drawing.IBounds = new Bounds()
  }
}
