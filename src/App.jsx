import { hot } from 'react-hot-loader'
import { Point } from './core/entities/Point.ts'
import React from 'react'
import { Shapes } from './core/modules/Shapes.ts'

function App() {
  const p1 = new Point(8, 5)
  const p2 = new Point(12, 5)
  const shape = new Shapes.Shape()
  shape.Type = Shapes.ShapeType.Circle
  console.log(shape)

  return (
    <>
      <ul>
        {' '}
        Point 1<li>{`x: ${p1.x}`}</li>
        <li>{`y: ${p1.y}`}</li> Point 2<li>{`x: ${p2.x}`}</li>
        <li>{`y: ${p2.y}`}</li>
        <p>{`Compare Point1 with Point2 -> ${p1.Compare(p2)}`}</p>
      </ul>
    </>
  )
}

export default hot(module)(App)
