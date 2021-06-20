import IBounds from '../contract/IBounds';
import { IPoints } from '../contract/IPoints';
import { Point } from './Point';

export default class Bounds implements IBounds {
  public Location: IPoints = new Point(0, 0);
  public Heigth: number = 0;
  public Width: number = 0;
  public Size() {
    return this.Heigth * this.Width;
  }
}
