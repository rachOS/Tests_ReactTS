import { hot } from 'react-hot-loader'
import React, { useEffect, useRef } from 'react'
import { DrawingRectangle } from './core/use-cases/drawing-shapes/DrawingRectangle'
import { Point } from './core/entities/drawing/Point'

function App(
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLCanvasElement> &
    React.CanvasHTMLAttributes<HTMLCanvasElement>
) {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    console.log('cursor', window.document.body.style.cursor)
    context.fillStyle = '#ebebd9'
    context.fillRect(50, 50, 600, 600)
    context.strokeStyle = 'black'
    context.lineWith = 5

    const rectangle = new DrawingRectangle()
    rectangle.move(new Point(55, 55))
    rectangle.shape.resize(10, 10)
    rectangle.draw(context)
    const rectangle1 = new DrawingRectangle()
    rectangle1.fillStyle = 'blue'
    rectangle1.shape.resize(10, 30)
    rectangle1.draw(context)
  }, [canvasRef])

  return (
    <canvas
      ref={canvasRef}
      id="drawi
ngCanvas"
      {...props}
    />
  )
}

export default hot(module)(App)
