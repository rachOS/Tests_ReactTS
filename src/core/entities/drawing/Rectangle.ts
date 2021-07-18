import { IRectangle } from '../../contract/drawing/IRectangle'

export class Rectangle implements IRectangle {
  constructor(public height: number, public width: number) {}

  public resize(height: number, width: number) {
    this.height = height
    this.width = width
  }
}
