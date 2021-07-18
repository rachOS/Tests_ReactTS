import { hot } from 'react-hot-loader'
import React from 'react'
import * as Shapes from './core/modules/Shapes'

function App() {
  const shape = new Shapes.Shape()
  shape.Type = Shapes.ShapeType.Circle
  shape.p1 = Shapes.point1

  return (
    <>
      <ul>
        {' '}
        Point 1<li>{`x: ${shape.p1.x}`}</li>
        <li>{`y: ${shape.p1.y}`}</li> Point 2<li>{`x: ${shape.p2.x}`}</li>
        <li>{`y: ${shape.p2.y}`}</li>
        <p>{`Compare Point1 with Point2 -> ${shape.p1.Compare(shape.p2)}`}</p>
      </ul>
    </>
  )
}

export default hot(module)(App)
