import { IDrawingShape } from '../../contract/drawing/IDrawingShape'
import { IShape } from '../../contract/drawing/IShape'
import { Point } from '../../entities/drawing/Point'
import { IPoint } from '../../contract/drawing/IPoint'
import { CanvasEngineAction } from '../../enums/CanvasEngineAction'

export class DrawingShapeBase implements IDrawingShape {
  public shape: IShape = null
  public location: IPoint = new Point(0, 0)
  public isSelected: boolean = false
  public selectionZoneWidth: number = 4
  public opacity: number = 1

  constructor() {}

  getClickLocationAction(
    mouse: IPoint,
    ctx: CanvasRenderingContext2D
  ): CanvasEngineAction {
    if (this.isInResizeZone(mouse)) {
      return CanvasEngineAction.Resize
    } else if (this.contains(mouse, ctx)) {
      return CanvasEngineAction.Drag
    } else {
      return CanvasEngineAction.None
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    throw new Error('Method not implemented.')
  }

  isInResizeZone(mouse: IPoint): boolean {
    throw new Error('Method not implemented.')
  }

  resizeLocation(to: IPoint): void {
    throw new Error('Method not implemented.')
  }

  move(to: IPoint): void {
    this.location = to
  }

  contains(mousePoint: IPoint, ctx: CanvasRenderingContext2D): boolean {
    throw new Error('Method not implemented.')
  }

  getMoveOffset(mousePosition: IPoint): IPoint {
    return new Point(0, 0)
  }

  getCursorType(mousePoint: IPoint): string {
    throw 'Method not implemented'
  }
}
