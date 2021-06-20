import { IPoints } from '../contract/IPoints';
import { ICompare } from '../contract/ICompare';

function addPoints(p1: IPoints, p2: IPoints): IPoints {
  var x = p1.x + p2.x;
  var y = p1.y + p2.y;
  return { x: x, y: y };
}

class Point implements IPoints, ICompare {
  x: number;
  y: number;

  constructor(x: number, y = 0) {
    this.x = x;
    this.y = y;
  }

  Compare(p2: IPoints): number {
    const p1val = this.x * this.x + this.y * this.y;
    const p2val = p2.x * p2.x + p2.y * p2.y;
    const result = p1val - p2val;
    if (result === 0) {
      return 0;
    } else if (result >= 0) {
      return 1;
    } else {
      return -1;
    }
  }

  static Compare(p1: Point, p2: Point): number {
    return p1.Compare(p2);
  }
}

const PointFn = (() => {
  function PointFn(this: any, x: number, y: number) {
    if (typeof y === 'undefined') {
      y = 0;
    }
    this.x = x;
    this.y = y;
  }
  return PointFn;
})();

export { addPoints, Point, PointFn };
