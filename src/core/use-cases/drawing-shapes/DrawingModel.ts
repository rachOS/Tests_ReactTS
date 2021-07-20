import { IDrawingModel } from '../../contract/drawing/IDrawingModel'
import { IDrawingShape } from '../../contract/drawing/IDrawingShape'
import { IPoint } from '../../contract/drawing/IPoint'
import { DrawingToolType } from '../../enums/DrawingToolType'

export class DrawingModel implements IDrawingModel {
  public selection: IDrawingShape = null
  public shapes: Array<IDrawingShape> = []
  constructor() {}

  public addShape(shape: IDrawingShape) {
    this.shapes.push(shape)
  }

  public getNewShape(location: IPoint): IDrawingShape {
    throw 'Not Implemented'
  }

  public getDrawingTool(): DrawingToolType {
    return DrawingToolType.Select
  }
}
