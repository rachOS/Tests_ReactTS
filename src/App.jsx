import { hot } from 'react-hot-loader';
import { Point } from './core/entities/Point';
import React from 'react';

function App() {
  const p1 = new Point(8, 5);
  const p2 = new Point(12, 5);
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
  );
}

export default hot(module)(App);
