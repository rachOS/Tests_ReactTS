function getEnumValue(): number {
  return Date.now()
}
export enum ShapeType {
  Line = 1,
  Circle,
  Triangle,
  Square,
  Rectangle,
  Freehand,
  Random = getEnumValue(),
}
