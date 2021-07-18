import { ICircle } from '../../contract/drawing/ICircle'

export class Circle implements ICircle {
  constructor(public radius: number) {}

  area(): number {
    return Math.PI * this.radius ** 2
  }

  resize(radius: number) {
    this.radius = radius
  }
}
