function getEnumValue(): number {
  return Date.now()
}
enum ShapeType {
  Line = 1,
  Circle,
  Triangle,
  Square,
  Rectangle,
  Freehand,
  Random = getEnumValue(),
}
export { ShapeType }
