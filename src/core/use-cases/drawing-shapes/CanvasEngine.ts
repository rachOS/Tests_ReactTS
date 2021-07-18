import { ICanvasEngine } from '../../contract/drawing/ICanvasEngine'
import { IDraw } from '../../contract/drawing/IDraw'
import { IDrawingModel } from '../../contract/drawing/IDrawingModel'

export class CanvasEngine implements ICanvasEngine {
  public context: CanvasRenderingContext2D

  constructor(
    private _canvas: HTMLCanvasElement,
    private _model: IDrawingModel
  ) {
    this.context = this._canvas.getContext('2d')
    this._canvas.addEventListener('mousedown', (e) => this._mousedown(e), true)
    this._canvas.addEventListener('mousemove', (e) => this._mousemove(e), true)
    this._canvas.addEventListener('mouseup', (e) => this._mouseup(e), true)
  }

  public invalidate(): void {
    window.requestAnimationFrame(() => this.draw())
  }

  public clear(): void {
    this.context.clearRect(0, 0, this._canvas.width, this._canvas.height)
  }

  public draw(): void {
    const shapes: Array<IDraw> = this._model.shapes
    this.clear()
    shapes &&
      shapes.map((shape) => {
        this.context.save()
        shape.draw(this.context)
        this.context.restore()
      })
  }

  private _mousedown(e: Event): void {
    console.log(e)
  }

  private _mousemove(e: Event): void {
    console.log(e)
  }

  private _mouseup(e: Event): void {
    console.log(e)
  }
}
