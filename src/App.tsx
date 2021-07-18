import { hot } from 'react-hot-loader'
import React, { useEffect, useRef } from 'react'
import { DrawingRectangle } from './core/use-cases/drawing-shapes/DrawingRectangle'
import { Point } from './core/entities/drawing/Point'
import './app.css'

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
