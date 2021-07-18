import { IPoint } from '../../contract/drawing/IPoint'

export class Point implements IPoint {
  constructor(public x: number, public y: number) {}
}
