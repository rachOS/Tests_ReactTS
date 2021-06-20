import { IBounds } from '../contract/IBounds'
import { Bounds } from '../entities/Bound'
import { Point } from '../entities/Point'
import { ShapeType } from '../enums/ShapeType'

/// <reference path="../contract/IBounds.ts"/>
/// <reference path="../entities/Bound.ts"/>
/// <reference path="../entities/Point.ts"/>
/// <reference path="../enums/ShapeType.ts"/>

export namespace Shapes {
  let origin = new Point(0, 0)

  export class Shape {
    public Type: ShapeType = ShapeType.Rectangle
    public Bounds: IBounds = new Bounds()
  }
}
