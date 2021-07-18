import { IDraw } from './IDraw'
import { IMove } from './IMove'
import { IResize } from './IResize'
import { IShape } from './IShape'
import { IPoint } from './IPoint'
import { CanvasEngineAction } from '../../enums/CanvasEngineAction'

export interface IDrawingShape extends IDraw, IResize, IMove {
  shape: IShape
  location: IPoint
  isSelected: boolean
  selectionZoneWidth: number
  opacity: number
  getCursorType(mousePoint: IPoint): string
  getClickLocationAction(
    mouse: IPoint,
    ctx: CanvasRenderingContext2D
  ): CanvasEngineAction
}
