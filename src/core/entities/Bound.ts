import { IBounds } from '../contract/IBounds';
import { IPoints } from '../contract/IPoints';
import { Point } from './Point';
class Bounds implements IBounds {
  public Location: IPoints = new Point(0, 0);
  private _heigth: number = 0;
  private _width: number = 0;

  public Size() {
    return this.Heigth * this.Width;
  }

  get Heigth(): number {
    return this._heigth;
  }
  set Heigth(value: number) {
    this._heigth = value > 0 ? value : 0;
  }

  get Width(): number {
    return this._width;
  }
  set Width(value: number) {
    this._width = value > 0 ? value : 0;
  }
}

export { Bounds };
