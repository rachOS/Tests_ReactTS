import { ILine } from '../../contract/drawing/ILine'
import { IPoint } from '../../contract/drawing/IPoint'

export class Line implements ILine {
  constructor(public point1: IPoint, public point2: IPoint) {}

  length(): number {
    const A: number = Math.pow(this.point2.x - this.point1.x, 2)
    const B: number = Math.pow(this.point2.y - this.point1.y, 2)
    return Math.sqrt(A + B)
  }
}
