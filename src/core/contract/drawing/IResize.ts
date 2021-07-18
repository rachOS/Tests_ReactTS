import { IPoint } from './IPoint'
export interface IResize {
  isInResizeZone: (mouse: IPoint) => boolean
  resizeLocation: (to: IPoint) => void
}
