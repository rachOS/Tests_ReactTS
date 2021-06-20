import React from 'react';
import { hot } from 'react-hot-loader';
import test from './Test.ts';
import { Point } from './core/entities/Point';

function App() {
  const points = new Point(8, 5);
  console.log('Point', points.Compare(1));

  return <p> {test}</p>;
}

export default hot(module)(App);
