import React from 'react';
// import ReactDOM from 'react-dom';
import './index.scss';
import { dispatcher, selector } from '../../store/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../../store/features/counter';
import { getCount } from '../../store/features/counter/selectors';
import { fetchWait } from '../../store/features/counter/thunks';
import { reset } from '../../store/features/random';
import { getRandom } from '../../store/features/random/selectors';
import { fetchRandom } from '../../store/features/random/thunks';

export default function App() {
  const dispatch = dispatcher();

  const counterValue = selector(getCount);
  const randomValue = selector(getRandom);

  return (
    <div className="center app">
      <h1>Hello World</h1>
      <p>How is it hanging?</p>
      <p>{counterValue}</p>
      <button onClick={() => dispatch(incrementByAmount(-10))}>-10</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
      <p></p>
      <button onClick={() => dispatch(fetchWait(1000))}>wait 1s</button>
      <button onClick={() => dispatch(fetchWait(2000))}>wait 2s</button>
      <p>{randomValue}</p>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(fetchRandom())}>fetch</button>
    </div>
  );
}
