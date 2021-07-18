import { IPoint } from './IPoint'
export interface IMove {
  move: (to: IPoint) => void
  contains(mousePoint: IPoint, ctx: CanvasRenderingContext2D): boolean
  getMoveOffset(mousePosition: IPoint): IPoint
}
