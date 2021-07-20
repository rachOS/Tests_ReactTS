import { hot } from 'react-hot-loader'
import React, { useEffect, useRef } from 'react'
import { DrawingRectangle } from './core/use-cases/drawing-shapes/DrawingRectangle'
import { Point } from './core/entities/drawing/Point'
import './app.css'
import { IDrawingModel } from './core/contract/drawing/IDrawingModel'
import { DrawingModel } from './core/use-cases/drawing-shapes/DrawingModel'
import { ICanvasEngine } from './core/contract/drawing/ICanvasEngine'
import { CanvasEngine } from './core/use-cases/drawing-shapes/CanvasEngine'

function App(
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLCanvasElement> &
    React.CanvasHTMLAttributes<HTMLCanvasElement>
) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const { current } = canvasRef
    const context = current.getContext('2d')
    const rectangle = new DrawingRectangle()
    rectangle.move(new Point(55, 55))
    rectangle.shape.resize(10, 50)
    rectangle.draw(context)

    const model: IDrawingModel = new DrawingModel()
    model.addShape(rectangle)

    var engine: ICanvasEngine = new CanvasEngine(current, model)

    function moveObject(counter: number, upperLimit: number) {
      if (counter > upperLimit) {
        return
      }
      setTimeout(() => {
        rectangle.move(
          new Point((rectangle.location.x += 1), (rectangle.location.y += 1))
        )
        engine.invalidate()
        counter++
        moveObject(counter, upperLimit)
      }, 0)
    }
    moveObject(0, 100)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width="300"
      height="300"
      id="drawingCanvas"
      {...props}
    />
  )
}

export default hot(module)(App)
