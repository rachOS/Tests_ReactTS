import { IShape } from './IShape'
import { IPoint } from '../../../../.history/src/core/contract/drawing/IPoint_20210718112755'
export interface IFreehand extends IShape {
  addPoint(point: IPoint): void
  points: Array<IPoint>
}
