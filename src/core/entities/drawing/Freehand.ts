import { IPoint } from '../../../../.history/src/core/contract/drawing/IPoint_20210718112755'
import { IFreehand } from '../../contract/drawing/IFreehand'

export class Freehand implements IFreehand {
  points: IPoint[]

  constructor() {}

  addPoint(point: IPoint): void {
    this.points.push(point)
  }
}
