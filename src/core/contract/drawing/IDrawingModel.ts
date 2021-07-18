import { DrawingToolType } from '../../enums/DrawingToolType'
import { IDrawingShape } from './IDrawingShape'
import { IPoint } from './IPoint'
export interface IDrawingModel {
  selection: IDrawingShape
  shapes: Array<IDrawingShape>
  addShape: (shape: IDrawingShape) => void
  getNewShape: (location: IPoint) => IDrawingShape
  getDrawingTool: () => DrawingToolType
}
