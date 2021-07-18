import { IFillStyle } from '../../contract/drawing/IFillStyle'
import { DrawingShapeBase } from './DrawingShapeBase'
import { Rectangle } from '../../entities/drawing/Rectangle'
import { IRectangle } from '../../contract/drawing/IRectangle'
import { CanvasEngineAction } from '../../enums/CanvasEngineAction'
import { IPoint } from '../../contract/drawing/IPoint'
import { Point } from '../../entities/drawing/Point'

export class DrawingRectangle extends DrawingShapeBase implements IFillStyle {
  shape: IRectangle = new Rectangle(0, 0)
  fillStyle: string = 'red'

  constructor() {
    super()
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.fillStyle
    ctx.globalAlpha = this.opacity
    ctx.fillRect(
      this.location.x,
      this.location.y,
      this.shape.width,
      this.shape.height
    )
    ctx.strokeStyle = ' black'
    ctx.lineWidth = 1
    ctx.strokeRect(
      this.location.x,
      this.location.y,
      this.shape.width,
      this.shape.height
    )
  }

  public isInResizeZone(point: IPoint): boolean {
    return (
      point.x >= this.location.x + this.shape.width - this.selectionZoneWidth &&
      point.x <= this.location.x + this.shape.width + this.selectionZoneWidth &&
      point.y >=
        this.location.y + this.shape.height - this.selectionZoneWidth &&
      point.y <= this.location.y + this.shape.height + this.selectionZoneWidth
    )
  }

  public resizeLocation(to: IPoint): void {
    const cursor = window.document.body.style.cursor
    console.log('cursor', cursor)
    if (cursor == 'se-resize') {
      this.shape.width = to.x - this.location.x
      this.shape.height = to.y - this.location.y
    }
  }

  public contains(mousePoint: IPoint, ctx: CanvasRenderingContext2D): boolean {
    if (this.shape.height < 0) {
      this.location.y = this.location.y + this.shape.height
      this.shape.height = this.shape.height * -1
    }
    if (this.shape.width < 0) {
      this.location.x += this.shape.width
      this.shape.width *= -1
    }
    return (
      this.location.x <= mousePoint.x &&
      this.location.x + this.shape.width >= mousePoint.x &&
      this.location.y <= mousePoint.y &&
      this.location.y + this.shape.height >= mousePoint.y
    )
  }

  public getMoveOffset(mousePosition: IPoint): IPoint {
    return new Point(
      mousePosition.x - this.location.x,
      mousePosition.y - this.location.y
    )
  }

  public getCursorType(mousePoint: IPoint): string {
    return this.isInResizeZone(mousePoint) ? 'se-resize' : 'move'
  }
}
